"use client"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Palette } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeSelector() {
  const { currentTheme, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Change theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <p className="text-sm font-medium mb-2">Select Theme</p>
          <div className="grid grid-cols-4 gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={cn(
                  "w-full h-8 rounded-md transition-all",
                  theme[theme.id === "dark" ? "accent" : "primary"],
                  currentTheme.id === theme.id && "ring-2 ring-offset-2 ring-black/10",
                )}
                onClick={() => {
                  setTheme(theme.id)
                  setIsOpen(false)
                }}
                title={theme.name}
              />
            ))}
          </div>
          <div className="mt-3 space-y-1">
            {themes.map((theme) => (
              <DropdownMenuItem
                key={theme.id}
                className={cn("flex items-center gap-2 cursor-pointer", currentTheme.id === theme.id && "bg-accent")}
                onClick={() => setTheme(theme.id)}
              >
                <div className={cn("w-4 h-4 rounded-full", theme[theme.id === "dark" ? "accent" : "primary"])} />
                {theme.name}
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

