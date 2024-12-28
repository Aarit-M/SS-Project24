import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Map } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onClear: () => void
  onSearch: () => void
  onAddItem: () => void
}

export function SearchBar({ value, onChange, onClear, onSearch, onAddItem }: SearchBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
      <div className="max-w-md mx-auto space-y-2">
        <div className="relative">
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search"
            className="pr-10"
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
          />
          {value && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={onClear}
            >
              ×
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button 
            className="w-full bg-[#2B5335] hover:bg-[#1f3d26]"
            onClick={onAddItem}
          >
            <Plus className="h-6 w-6" />
          </Button>
          <Button variant="secondary" className="w-full bg-[#5B4F8B] hover:bg-[#4a3f70] text-white">
            <Map className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

