// This file handles fetching and caching Quran text

export interface QuranVerse {
  number: number
  text: string
  translation?: string
}

export interface QuranSurah {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  revelationType: string
  verses: QuranVerse[]
}

// Cache for loaded surahs
const surahCache: Record<number, QuranSurah> = {}

// Function to fetch a surah
export async function fetchSurah(surahNumber: number): Promise<QuranSurah> {
  // If we have it in cache, return it
  if (surahCache[surahNumber]) {
    return surahCache[surahNumber]
  }

  try {
    // Fetch surah info
    const infoResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
    const infoData = await infoResponse.json()

    if (!infoResponse.ok) {
      throw new Error("Failed to fetch surah info")
    }

    const surahInfo = infoData.data

    // Fetch Arabic text
    const textResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`)
    const textData = await textResponse.json()

    if (!textResponse.ok) {
      throw new Error("Failed to fetch surah text")
    }

    // Create verses array
    const verses: QuranVerse[] = textData.data.ayahs.map((ayah: any) => ({
      number: ayah.numberInSurah,
      text: ayah.text,
    }))

    // Create full surah object
    const surah: QuranSurah = {
      number: surahInfo.number,
      name: surahInfo.name,
      englishName: surahInfo.englishName,
      englishNameTranslation: surahInfo.englishNameTranslation,
      numberOfAyahs: surahInfo.numberOfAyahs,
      revelationType: surahInfo.revelationType,
      verses: verses,
    }

    // Cache it
    surahCache[surahNumber] = surah

    return surah
  } catch (error) {
    console.error("Error fetching surah:", error)
    throw error
  }
}

// Function to get all surah info (without verses)
export async function fetchAllSurahInfo(): Promise<Omit<QuranSurah, "verses">[]> {
  try {
    const response = await fetch("https://api.alquran.cloud/v1/surah")
    const data = await response.json()

    if (!response.ok) {
      throw new Error("Failed to fetch surah list")
    }

    return data.data
  } catch (error) {
    console.error("Error fetching surah list:", error)
    throw error
  }
}

// Function to get cached surah if available
export function getCachedSurah(surahNumber: number): QuranSurah | null {
  return surahCache[surahNumber] || null
}

