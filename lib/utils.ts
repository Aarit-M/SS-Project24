import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fuzzySearch(items: any[], searchTerm: string) {
  const term = searchTerm.toLowerCase()
  return items.filter(item => 
    item.name.toLowerCase().includes(term) ||
    item.location.toLowerCase().includes(term)
  )
}

// Save dark mode preference
export function setDarkMode(isDark: boolean) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

// Get dark mode preference
export function getDarkMode(): boolean {
  if (typeof window !== 'undefined') {
    const preference = localStorage.getItem('darkMode')
    if (preference) {
      return preference === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

