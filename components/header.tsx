"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, X, BookText, Book } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeSelector } from "@/components/theme-selector"
import { useTheme } from "@/contexts/theme-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { currentTheme } = useTheme()

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={cn(
        "border-b border-gray-200 sticky top-0 z-50",
        currentTheme.id === "dark" ? "bg-gray-800" : "bg-white",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className={cn("h-8 w-8 rounded-full flex items-center justify-center", currentTheme.primaryLight)}>
            <BookOpen className={cn("h-4 w-4", currentTheme.textPrimary)} />
          </div>
          <span className={cn("font-bold", currentTheme.textPrimary)}>Quran Player</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/")
                ? currentTheme.textSecondary
                : currentTheme.id === "dark"
                  ? "text-gray-300"
                  : "text-gray-600",
              currentTheme.id === "dark" ? "hover:text-white" : `hover:${currentTheme.textSecondary}`,
            )}
          >
            Home
          </Link>
          <Link
            href="/quran"
            className={cn(
              "text-sm font-medium transition-colors flex items-center",
              isActive("/quran")
                ? currentTheme.textSecondary
                : currentTheme.id === "dark"
                  ? "text-gray-300"
                  : "text-gray-600",
              currentTheme.id === "dark" ? "hover:text-white" : `hover:${currentTheme.textSecondary}`,
            )}
          >
            <Book className="h-4 w-4 mr-1" />
            Quran
          </Link>
          <Link
            href="/islamic-resources"
            className={cn(
              "text-sm font-medium transition-colors flex items-center",
              isActive("/islamic-resources")
                ? currentTheme.textSecondary
                : currentTheme.id === "dark"
                  ? "text-gray-300"
                  : "text-gray-600",
              currentTheme.id === "dark" ? "hover:text-white" : `hover:${currentTheme.textSecondary}`,
            )}
          >
            <BookText className="h-4 w-4 mr-1" />
            Resources
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/about")
                ? currentTheme.textSecondary
                : currentTheme.id === "dark"
                  ? "text-gray-300"
                  : "text-gray-600",
              currentTheme.id === "dark" ? "hover:text-white" : `hover:${currentTheme.textSecondary}`,
            )}
          >
            About
          </Link>
          <div className="flex items-center">
            <ThemeSelector />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeSelector />
          <button
            className={cn("p-2 rounded-md", currentTheme.id === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100")}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={cn("h-6 w-6", currentTheme.id === "dark" ? "text-gray-300" : "text-gray-600")} />
            ) : (
              <Menu className={cn("h-6 w-6", currentTheme.id === "dark" ? "text-gray-300" : "text-gray-600")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          className={cn("md:hidden border-b border-gray-200", currentTheme.id === "dark" ? "bg-gray-800" : "bg-white")}
        >
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              href="/"
              className={cn(
                "block py-2 px-3 rounded-md font-medium",
                isActive("/")
                  ? cn(currentTheme.accent, currentTheme.textSecondary)
                  : cn(
                      currentTheme.id === "dark" ? "text-gray-300" : "text-gray-600",
                      currentTheme.id === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50",
                    ),
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/quran"
              className={cn(
                "flex items-center py-2 px-3 rounded-md font-medium",
                isActive("/quran")
                  ? cn(currentTheme.accent, currentTheme.textSecondary)
                  : cn(
                      currentTheme.id === "dark" ? "text-gray-300" : "text-gray-600",
                      currentTheme.id === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50",
                    ),
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <Book className="h-4 w-4 mr-2" />
              Quran
            </Link>
            <Link
              href="/islamic-resources"
              className={cn(
                "flex items-center py-2 px-3 rounded-md font-medium",
                isActive("/islamic-resources")
                  ? cn(currentTheme.accent, currentTheme.textSecondary)
                  : cn(
                      currentTheme.id === "dark" ? "text-gray-300" : "text-gray-600",
                      currentTheme.id === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50",
                    ),
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <BookText className="h-4 w-4 mr-2" />
              Islamic Resources
            </Link>
            <Link
              href="/about"
              className={cn(
                "block py-2 px-3 rounded-md font-medium",
                isActive("/about")
                  ? cn(currentTheme.accent, currentTheme.textSecondary)
                  : cn(
                      currentTheme.id === "dark" ? "text-gray-300" : "text-gray-600",
                      currentTheme.id === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50",
                    ),
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

