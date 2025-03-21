"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"
import { weeklyHadiths, type Hadith } from "@/lib/hadith-data"

export function HadithDisplay() {
  const { currentTheme } = useTheme()
  const [showTranslations, setShowTranslations] = useState<Record<number, boolean>>({})

  // Get current day of the week
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  const currentDay = days[new Date().getDay()]

  const toggleTranslation = (id: number) => {
    setShowTranslations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const renderHadith = (hadith: Hadith) => {
    const showTranslation = showTranslations[hadith.id] || false

    return (
      <Card key={hadith.id} className="mb-4">
        <CardContent className="pt-6">
          <div className="mb-4">
            <p className="text-right text-lg leading-relaxed" dir="rtl">
              {hadith.arabic}
            </p>
          </div>

          {showTranslation && (
            <div className="mt-4 pt-4 border-t">
              <p className="text-gray-700 dark:text-gray-300">{hadith.english}</p>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <p>Source: {hadith.source}</p>
                <p>Narrator: {hadith.narrator}</p>
              </div>
            </div>
          )}

          <Button variant="outline" size="sm" onClick={() => toggleTranslation(hadith.id)} className="mt-4">
            {showTranslation ? "Hide Translation" : "Show Translation"}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className={cn("text-2xl font-bold mb-6 text-center", currentTheme.textPrimary)}>Daily Hadiths</h2>

      <Tabs defaultValue={currentDay} className="w-full">
        <TabsList className="grid grid-cols-7 mb-6">
          {days.map((day) => (
            <TabsTrigger key={day} value={day} className="capitalize">
              {day.slice(0, 3)}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map((day) => (
          <TabsContent key={day} value={day}>
            <div className="space-y-4">
              <h3 className={cn("text-xl font-semibold mb-4 capitalize", currentTheme.textSecondary)}>
                {day}'s Hadiths
              </h3>

              {weeklyHadiths[day].map((hadith) => renderHadith(hadith))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

