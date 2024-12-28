import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import type { InventoryItem } from "@/types/inventory"

interface ItemListProps {
  items: InventoryItem[]
  onItemClick: (item: InventoryItem) => void
}

export function ItemList({ items, onItemClick }: ItemListProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Card 
          key={item.id}
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => onItemClick(item)}
        >
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-muted rounded-md" />
              <div className="text-left">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.location}</div>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

