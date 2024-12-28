import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Plus, X } from 'lucide-react'
import type { NewItemForm } from "@/types/inventory"
import { useNavigation } from "@/contexts/navigation-context"

interface AddItemFormProps {
  data: NewItemForm
  onChange: (data: Partial<NewItemForm>) => void
  onSubmit: () => void
}

export function AddItemForm({ data, onChange, onSubmit }: AddItemFormProps) {
  const { navigate } = useNavigation()

  return (
    <div className="fixed inset-0 bg-background z-20">
      <div className="relative p-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={() => navigate('main')}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="space-y-4 mt-8">
          <div className="bg-[#F5F5F5] dark:bg-gray-800 p-4 rounded-md">
            <Input
              value={data.title}
              onChange={(e) => onChange({ title: e.target.value })}
              placeholder="Enter Title"
              className="bg-transparent text-lg font-medium placeholder:text-muted-foreground border-none p-0 h-auto"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-12"
              onClick={() => onChange({ title: '' })}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <Checkbox
                checked={data.hasStandardMeasurements}
                onCheckedChange={(checked) => 
                  onChange({ hasStandardMeasurements: checked as boolean })
                }
                className="border-[#2B5335] text-[#2B5335]"
              />
              <span className="text-sm">
                Does this item have standard measurements?
              </span>
            </label>
            <p className="text-xs text-muted-foreground">
              e.g screws might have standardized measurements (m2, m3, m4 screws)
            </p>
          </div>

          {data.hasStandardMeasurements && (
            <div className="grid grid-cols-2 gap-2">
              <Select
                value={data.unitType}
                onValueChange={(value) => onChange({ unitType: value })}
              >
                <SelectTrigger className="bg-[#F5F5F5] dark:bg-gray-800 border-none">
                  <SelectValue placeholder="Unit Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric</SelectItem>
                  <SelectItem value="imperial">Imperial</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={data.value}
                onValueChange={(value) => onChange({ value })}
              >
                <SelectTrigger className="bg-[#F5F5F5] dark:bg-gray-800 border-none">
                  <SelectValue placeholder="Value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="bg-[#F5F5F5] dark:bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <Input
                value={data.location}
                onChange={(e) => onChange({ location: e.target.value })}
                placeholder="Location"
                className="bg-transparent border-none p-0 h-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('camera')}
                className="hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Camera className="h-6 w-6" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              click the camera button and scan a new qr code to enter a new location
            </p>
          </div>

          <div className="aspect-square bg-[#F5F5F5] dark:bg-gray-800 rounded-md flex flex-col items-center justify-center">
            {data.image ? (
              <img src={data.image} alt="Item" className="w-full h-full object-cover rounded-md" />
            ) : (
              <Button
                variant="secondary"
                onClick={() => navigate('camera')}
                className="bg-[#333333] text-white hover:bg-[#444444] w-full"
              >
                Add Image
              </Button>
            )}
          </div>
        </div>

        <Button 
          className="w-full bg-[#00B341] hover:bg-[#009935] mt-4"
          onClick={onSubmit}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

