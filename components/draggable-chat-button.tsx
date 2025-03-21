"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"
import { useMobile } from "@/hooks/use-mobile"

interface Position {
  x: number
  y: number
}

interface DraggableChatButtonProps {
  onClick: () => void
}

export function DraggableChatButton({ onClick }: DraggableChatButtonProps) {
  const [position, setPosition] = useState<Position>({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)
  const { currentTheme } = useTheme()
  const isMobile = useMobile()

  // Set initial position based on screen size
  useEffect(() => {
    if (isMobile) {
      // Position in bottom right on mobile
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      setPosition({
        x: viewportWidth - 70,
        y: viewportHeight - 100,
      })
    } else {
      // Default position for desktop
      setPosition({ x: 20, y: 20 })
    }
  }, [isMobile])

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  // Handle touch start event for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (buttonRef.current && e.touches[0]) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  // Handle mouse move event during dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault()
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }
  }

  // Handle touch move event for mobile
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      e.preventDefault()
      setPosition({
        x: e.touches[0].clientX - dragOffset.x,
        y: e.touches[0].clientY - dragOffset.y,
      })
    }
  }

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false)

    // Keep button within viewport bounds
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      if (rect.right > viewportWidth) {
        setPosition((prev) => ({ ...prev, x: viewportWidth - rect.width }))
      }
      if (rect.left < 0) {
        setPosition((prev) => ({ ...prev, x: 0 }))
      }
      if (rect.bottom > viewportHeight) {
        setPosition((prev) => ({ ...prev, y: viewportHeight - rect.height }))
      }
      if (rect.top < 0) {
        setPosition((prev) => ({ ...prev, y: 0 }))
      }
    }
  }

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleMouseUp)
    } else {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  // Handle click event
  const handleClick = (e: React.MouseEvent) => {
    // Only trigger click if not dragging
    if (!isDragging) {
      onClick()
    }
  }

  return (
    <div
      ref={buttonRef}
      className={cn(
        "fixed z-50 flex items-center justify-center rounded-full shadow-lg",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        currentTheme.primary,
        isMobile ? "w-16 h-16" : "w-14 h-14",
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: "none",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      <Bot className={cn(isMobile ? "h-8 w-8" : "h-6 w-6", "text-white")} />
    </div>
  )
}

