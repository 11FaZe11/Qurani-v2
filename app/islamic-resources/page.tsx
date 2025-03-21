"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HijriCalendar } from "@/components/hijri-calendar"
import { HadithDisplay } from "@/components/hadith-display"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export default function IslamicResourcesPage() {
  const { currentTheme } = useTheme()

  return (
    <div className={cn("min-h-[calc(100vh-4rem)] py-8 px-4", `bg-gradient-to-b ${currentTheme.gradient}`)}>
      <div className="max-w-6xl mx-auto">
        <h1 className={cn("text-3xl font-bold mb-8 text-center", currentTheme.textPrimary)}>Islamic Resources</h1>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="calendar">Hijri Calendar</TabsTrigger>
            <TabsTrigger value="hadith">Daily Hadiths</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="flex justify-center">
            <HijriCalendar />
          </TabsContent>

          <TabsContent value="hadith">
            <HadithDisplay />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

