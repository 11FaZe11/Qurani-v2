"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import QuranPlayer from "@/components/quran-player"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const surahParam = searchParams.get("surah")
  const { currentTheme } = useTheme()

  useEffect(() => {
    // This is just to ensure hydration is complete
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center", `bg-gradient-to-b ${currentTheme.gradient}`)}>
        <div className="text-center">
          <div
            className={cn(
              "animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4",
              currentTheme.id === "dark" ? "border-gray-300" : `border-${currentTheme.id}-700`,
            )}
          ></div>
          <p className={currentTheme.textPrimary}>Loading Quran Player...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("min-h-[calc(100vh-4rem)]", `bg-gradient-to-b ${currentTheme.gradient}`)}>
      <QuranPlayer initialSurahNumber={surahParam ? Number.parseInt(surahParam) : undefined} />
    </div>
  )
}

