"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"
import { useToast } from "@/hooks/use-toast"
import { DraggableChatButton } from "./draggable-chat-button"
import { useMobile } from "@/hooks/use-mobile"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function IslamAIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Assalamu alaikum! I am an AI assistant that can answer your questions about Islam and the Quran. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { currentTheme } = useTheme()
  const { toast } = useToast()
  const isMobile = useMobile()

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])

    // Clear input
    setInput("")

    // Set loading
    setIsLoading(true)

    try {
      // Format the question
      const userQuestion = input.trim()

      // Use Google's Generative AI API with the updated endpoint and model
      const response = await fetch(
        "Enter_ur_API_Key",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Answer this question about Islam or the Quran: ${userQuestion}`,
                  },
                ],
              },
            ],
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to get response from AI: ${response.status}`)
      }

      const data = await response.json()

      // Extract the response text from the Gemini API response format
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I apologize, but I couldn't generate a response at this time."

      // Add AI response
      const aiMessage: Message = {
        role: "assistant",
        content: aiResponse,
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error fetching from Islam AI API:", error)
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again later.",
        variant: "destructive",
      })

      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I encountered an error while processing your request. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
      // Focus back on input after response
      inputRef.current?.focus()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Draggable chat button */}
      {!isOpen && <DraggableChatButton onClick={toggleChat} />}

      {/* Chat dialog */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 flex flex-col transition-all duration-300 ease-in-out",
            isMobile
              ? "inset-0 rounded-none" // Full screen on mobile
              : "bottom-4 right-4 w-80 md:w-96 h-[500px] rounded-lg",
            currentTheme.id === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800",
            "shadow-lg",
          )}
        >
          {/* Chat header */}
          <div
            className={cn(
              "flex items-center justify-between p-3",
              isMobile ? "rounded-none" : "rounded-t-lg",
              currentTheme.primary,
            )}
          >
            <div className="flex items-center space-x-2">
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 mr-1 -ml-1"
                  onClick={toggleChat}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <Bot className="h-5 w-5 text-white" />
              <span className="font-medium text-white">Islam AI Assistant</span>
            </div>
            {!isMobile && <X className="h-5 w-5 text-white hover:text-gray-200 cursor-pointer" onClick={toggleChat} />}
          </div>

          {/* Chat body */}
          <ScrollArea
            className={cn(
              "flex-1 p-4",
              isMobile && "pb-20", // Extra padding at bottom on mobile for better scrolling
            )}
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2",
                      message.role === "user"
                        ? cn(currentTheme.primary, "text-white")
                        : currentTheme.id === "dark"
                          ? "bg-gray-700"
                          : "bg-gray-100",
                      isMobile && "text-base max-w-[85%]", // Larger text and bubbles on mobile
                    )}
                  >
                    <p className={cn("whitespace-pre-wrap", isMobile ? "text-base" : "text-sm")}>{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Chat input */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              isMobile
                ? "p-3 border-t fixed bottom-0 left-0 right-0 bg-inherit" // Fixed at bottom on mobile
                : "p-3 border-t",
              currentTheme.id === "dark" ? "border-gray-700" : "border-gray-200",
            )}
          >
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about Islam..."
                className={cn(
                  currentTheme.id === "dark" && "bg-gray-700 border-gray-600 text-white",
                  isMobile && "h-12 text-base", // Taller input with larger text on mobile
                )}
                disabled={isLoading}
              />
              <Button
                type="submit"
                size={isMobile ? "default" : "icon"}
                className={cn(
                  currentTheme.primary,
                  isMobile && "px-4 h-12", // Larger button on mobile
                )}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div
                    className={cn(
                      "border-2 border-white border-t-transparent rounded-full animate-spin",
                      isMobile ? "h-5 w-5" : "h-4 w-4",
                    )}
                  ></div>
                ) : (
                  <>
                    {isMobile && <span className="mr-2">Send</span>}
                    <Send className={isMobile ? "h-5 w-5" : "h-4 w-4"} />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

