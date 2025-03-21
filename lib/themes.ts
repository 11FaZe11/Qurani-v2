export type Theme = {
  id: string
  name: string
  primary: string
  primaryLight: string
  primaryDark: string
  accent: string
  gradient: string
  textPrimary: string
  textSecondary: string
  buttonText: string
}

export const themes: Theme[] = [
  {
    id: "emerald",
    name: "Emerald",
    primary: "bg-emerald-600",
    primaryLight: "bg-emerald-100",
    primaryDark: "bg-emerald-800",
    accent: "bg-emerald-50",
    gradient: "from-emerald-50 to-white",
    textPrimary: "text-emerald-800",
    textSecondary: "text-emerald-600",
    buttonText: "text-white",
  },
  {
    id: "blue",
    name: "Ocean Blue",
    primary: "bg-blue-600",
    primaryLight: "bg-blue-100",
    primaryDark: "bg-blue-800",
    accent: "bg-blue-50",
    gradient: "from-blue-50 to-white",
    textPrimary: "text-blue-800",
    textSecondary: "text-blue-600",
    buttonText: "text-white",
  },
  {
    id: "violet",
    name: "Royal Purple",
    primary: "bg-violet-600",
    primaryLight: "bg-violet-100",
    primaryDark: "bg-violet-800",
    accent: "bg-violet-50",
    gradient: "from-violet-50 to-white",
    textPrimary: "text-violet-800",
    textSecondary: "text-violet-600",
    buttonText: "text-white",
  },
  {
    id: "amber",
    name: "Golden Amber",
    primary: "bg-amber-600",
    primaryLight: "bg-amber-100",
    primaryDark: "bg-amber-800",
    accent: "bg-amber-50",
    gradient: "from-amber-50 to-white",
    textPrimary: "text-amber-800",
    textSecondary: "text-amber-600",
    buttonText: "text-white",
  },
  {
    id: "rose",
    name: "Rose",
    primary: "bg-rose-600",
    primaryLight: "bg-rose-100",
    primaryDark: "bg-rose-800",
    accent: "bg-rose-50",
    gradient: "from-rose-50 to-white",
    textPrimary: "text-rose-800",
    textSecondary: "text-rose-600",
    buttonText: "text-white",
  },
  {
    id: "slate",
    name: "Slate",
    primary: "bg-slate-600",
    primaryLight: "bg-slate-100",
    primaryDark: "bg-slate-800",
    accent: "bg-slate-50",
    gradient: "from-slate-50 to-white",
    textPrimary: "text-slate-800",
    textSecondary: "text-slate-600",
    buttonText: "text-white",
  },
  {
    id: "teal",
    name: "Teal",
    primary: "bg-teal-600",
    primaryLight: "bg-teal-100",
    primaryDark: "bg-teal-800",
    accent: "bg-teal-50",
    gradient: "from-teal-50 to-white",
    textPrimary: "text-teal-800",
    textSecondary: "text-teal-600",
    buttonText: "text-white",
  },
  {
    id: "dark",
    name: "Dark Mode",
    primary: "bg-gray-700",
    primaryLight: "bg-gray-600",
    primaryDark: "bg-gray-800",
    accent: "bg-gray-900",
    gradient: "from-gray-900 to-gray-800",
    textPrimary: "text-gray-100",
    textSecondary: "text-gray-300",
    buttonText: "text-white",
  },
]

export const getThemeById = (id: string): Theme => {
  return themes.find((theme) => theme.id === id) || themes[0]
}

