export interface InventoryItem {
  id: number
  name: string
  location: string
  image?: string
  measurements?: {
    type: 'metric' | 'imperial'
    value: string
  }
}

export interface NewItemForm {
  title: string
  location: string
  hasStandardMeasurements: boolean
  unitType: string
  value: string
  image: string | null
}

export type ViewState = 'main' | 'detail' | 'add-item' | 'camera' | 'map'

export interface NavigationState {
  currentView: ViewState
  previousView: ViewState | null
}

