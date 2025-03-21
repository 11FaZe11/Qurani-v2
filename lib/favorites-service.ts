import { authService } from "./auth-service"

// Define the type for a favorite surah
export interface FavoriteSurah {
  number: number
  name: string
  englishName: string
  englishNameTranslation: string
  numberOfAyahs: number
  audioUrl: string
}

// Key for storing favorites in localStorage
const FAVORITES_KEY = "quran_player_favorites"

export const favoritesService = {
  // Get all favorites for the current user
  getFavorites: (): FavoriteSurah[] => {
    if (typeof window === "undefined") return []

    const user = authService.getCurrentUser()
    if (!user) return []

    const favoritesMap = getFavoritesMap()
    return favoritesMap[user.id] || []
  },

  // Add a surah to favorites
  addFavorite: (surah: FavoriteSurah): void => {
    const user = authService.getCurrentUser()
    if (!user) return

    const favoritesMap = getFavoritesMap()
    const userFavorites = favoritesMap[user.id] || []

    // Check if already in favorites
    if (!userFavorites.some((fav) => fav.number === surah.number)) {
      userFavorites.push(surah)
      favoritesMap[user.id] = userFavorites
      saveFavoritesMap(favoritesMap)
    }
  },

  // Remove a surah from favorites
  removeFavorite: (surahNumber: number): void => {
    const user = authService.getCurrentUser()
    if (!user) return

    const favoritesMap = getFavoritesMap()
    const userFavorites = favoritesMap[user.id] || []

    favoritesMap[user.id] = userFavorites.filter((surah) => surah.number !== surahNumber)
    saveFavoritesMap(favoritesMap)
  },

  // Check if a surah is in favorites
  isFavorite: (surahNumber: number): boolean => {
    const favorites = favoritesService.getFavorites()
    return favorites.some((surah) => surah.number === surahNumber)
  },

  // Toggle favorite status
  toggleFavorite: (surah: FavoriteSurah): boolean => {
    const isFavorite = favoritesService.isFavorite(surah.number)

    if (isFavorite) {
      favoritesService.removeFavorite(surah.number)
      return false
    } else {
      favoritesService.addFavorite(surah)
      return true
    }
  },
}

// Helper functions for managing favorites in localStorage
function getFavoritesMap(): Record<string, FavoriteSurah[]> {
  if (typeof window === "undefined") return {}

  const storedFavorites = localStorage.getItem(FAVORITES_KEY)
  if (!storedFavorites) return {}

  try {
    return JSON.parse(storedFavorites)
  } catch (e) {
    return {}
  }
}

function saveFavoritesMap(favoritesMap: Record<string, FavoriteSurah[]>): void {
  if (typeof window === "undefined") return

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesMap))
}

