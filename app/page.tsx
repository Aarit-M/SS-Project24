"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { ItemList } from "@/components/item-list"
import { ItemDetail } from "@/components/item-detail"
import { AddItemForm } from "@/components/add-item-form"
import { CameraView } from "@/components/camera-view"
import { MapModal } from "@/components/map-modal"
import { NavigationProvider, useNavigation } from "@/contexts/navigation-context"
import { fuzzySearch } from "@/lib/utils"
import type { InventoryItem, NewItemForm } from "@/types/inventory"

const initialItems: InventoryItem[] = [
  { id: 1, name: 'Hammer Drill', location: "Kearney's Room; Cabinet X" },
  { id: 2, name: 'Power Drill', location: "Kearney's Room; Cabinet 3" },
  { id: 3, name: 'Hand Drill', location: "Storage Room; Shelf B" },
  { id: 4, name: 'Impact Drill', location: "Workshop; Cabinet 2" },
  { id: 5, name: 'Drill Bits Set', location: "Tool Room; Drawer A" },
]

const initialNewItem: NewItemForm = {
  title: '',
  location: '',
  hasStandardMeasurements: false,
  unitType: '',
  value: '',
  image: null
}

function InventoryApp() {
  const [items, setItems] = useState<InventoryItem[]>(initialItems)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false)
  const [newItem, setNewItem] = useState<NewItemForm>(initialNewItem)
  
  const { state, navigate } = useNavigation()
  const filteredItems = searchQuery ? fuzzySearch(items, searchQuery) : items

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true)
      setSelectedItem(null)
    }
  }

  const handleItemClick = (item: InventoryItem) => {
    setSelectedItem(item)
    navigate('detail')
  }

  const handleAddItem = () => {
    if (newItem.title && newItem.location) {
      const item: InventoryItem = {
        id: items.length + 1,
        name: newItem.title,
        location: newItem.location,
        image: newItem.image || undefined,
        ...(newItem.hasStandardMeasurements && {
          measurements: {
            type: newItem.unitType as 'metric' | 'imperial',
            value: newItem.value
          }
        })
      }
      setItems([...items, item])
      setNewItem(initialNewItem)
      navigate('main')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="p-4 max-w-md mx-auto relative min-h-[calc(100vh-64px)]">
        {state.currentView === 'main' && (
          <>
            {!showResults ? (
              <div className="flex flex-col h-full justify-end pb-20">
                <div className="text-center mb-8 text-muted-foreground">
                  Search below to find your part!
                </div>
              </div>
            ) : (
              <ItemList 
                items={filteredItems}
                onItemClick={handleItemClick}
              />
            )}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => {
                setSearchQuery('')
                setShowResults(false)
              }}
              onSearch={handleSearch}
              onAddItem={() => navigate('add-item')}
              onOpenMap={() => setShowMapModal(true)}
            />
          </>
        )}

        {state.currentView === 'detail' && selectedItem && (
          <ItemDetail 
            item={selectedItem}
            onOpenMap={() => setShowMapModal(true)}
          />
        )}

        {state.currentView === 'add-item' && (
          <AddItemForm
            data={newItem}
            onChange={(data) => setNewItem({ ...newItem, ...data })}
            onSubmit={handleAddItem}
          />
        )}

        {state.currentView === 'camera' && (
          <CameraView />
        )}

        <MapModal 
          isOpen={showMapModal}
          onClose={() => setShowMapModal(false)}
          location={selectedItem?.location}
        />
      </main>
    </div>
  )
}

export default function Page() {
  return (
    <NavigationProvider>
      <InventoryApp />
    </NavigationProvider>
  )
}

