"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"
import { fetchSurah, type QuranSurah, type QuranVerse } from "@/lib/quran-text"

interface SurahDisplayProps {
  surahNumber: number
}

export function SurahDisplay({ surahNumber }: SurahDisplayProps) {
  const [surah, setSurah] = useState<QuranSurah | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { currentTheme } = useTheme()

  useEffect(() => {
    async function loadSurah() {
      try {
        setIsLoading(true)
        setError(null)
        const surahData = await fetchSurah(surahNumber)
        setSurah(surahData)
      } catch (err) {
        console.error("Failed to load surah:", err)
        setError("Failed to load surah. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadSurah()
  }, [surahNumber])

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-8 w-3/4 mx-auto" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  if (!surah) {
    return null
  }

  // Add Bismillah except for Surah 9 (At-Tawbah)
  const showBismillah = surah.number !== 9

  return (
    <div className="space-y-6">
      {/* Surah header */}
      <div className="text-center space-y-2">
        <h1 className={cn("text-3xl font-bold", currentTheme.textPrimary)}>{surah.name}</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300">
          {surah.englishName} - {surah.englishNameTranslation}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {surah.numberOfAyahs} Verses • {surah.revelationType}
        </p>
      </div>

      {/* Bismillah */}
      {showBismillah && (
        <div className="text-center my-6">
          <p className="text-2xl font-quran" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      )}

      {/* Verses */}
      <div className="space-y-4">
        {surah.verses.map((verse) => (
          <VerseDisplay key={verse.number} verse={verse} />
        ))}
      </div>
    </div>
  )
}

interface VerseDisplayProps {
  verse: QuranVerse
}

function VerseDisplay({ verse }: VerseDisplayProps) {
  const { currentTheme } = useTheme()

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start">
            <div
              className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1",
                currentTheme.primaryLight,
                currentTheme.textPrimary,
              )}
            >
              <span className="text-sm font-medium">{verse.number}</span>
            </div>
            <p className="text-xl leading-relaxed font-quran" dir="rtl">
              {verse.text}
            </p>
          </div>

          {verse.translation && <div className="mt-2 pl-11 text-gray-600 dark:text-gray-300">{verse.translation}</div>}
        </div>
      </CardContent>
    </Card>
  )
}

