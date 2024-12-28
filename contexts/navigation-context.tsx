"use client"

import { createContext, useContext, useState } from 'react'
import type { ViewState, NavigationState } from '@/types/inventory'

interface NavigationContextType {
  state: NavigationState
  navigate: (to: ViewState) => void
  goBack: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<NavigationState>({
    currentView: 'main',
    previousView: null
  })

  const navigate = (to: ViewState) => {
    setState(prev => ({
      currentView: to,
      previousView: prev.currentView
    }))
  }

  const goBack = () => {
    setState(prev => ({
      currentView: prev.previousView || 'main',
      previousView: null
    }))
  }

  return (
    <NavigationContext.Provider value={{ state, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}

