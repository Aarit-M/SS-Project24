import { Button } from "@/components/ui/button"
import { MapPin, Edit, Plus, Map } from 'lucide-react'
import type { InventoryItem } from "@/types/inventory"
import { useNavigation } from "@/contexts/navigation-context"

interface ItemDetailProps {
  item: InventoryItem
  onOpenMap: () => void
}

export function ItemDetail({ item, onOpenMap }: ItemDetailProps) {
  const { navigate } = useNavigation()

  return (
    <div className="fixed inset-0 bg-background">
      <div className="h-64 bg-muted mb-4" />
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
        <div className="flex items-center text-muted-foreground mb-6">
          <MapPin className="h-5 w-5 mr-2" />
          {item.location}
        </div>
        <Button className="w-full bg-gray-500 hover:bg-gray-600 mb-2">
          <Edit className="h-6 w-6" />
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button 
            className="w-full bg-[#2B5335] hover:bg-[#1f3d26]"
            onClick={() => navigate('add-item')}
          >
            <Plus className="h-6 w-6" />
          </Button>
          <Button 
            className="w-full bg-[#5B4F8B] hover:bg-[#4a3f70]"
            onClick={onOpenMap}
          >
            <Map className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

