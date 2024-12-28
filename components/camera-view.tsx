import { Button } from "@/components/ui/button"
import { X, HelpCircle } from 'lucide-react'
import { useNavigation } from "@/contexts/navigation-context"

export function CameraView() {
  const { navigate } = useNavigation()

  return (
    <div className="fixed inset-0 bg-background z-30">
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10"
          onClick={() => navigate('add-item')}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="h-[calc(100vh-100px)] bg-muted flex items-center justify-center">
          <span className="text-xl">Camera Feed</span>
        </div>
        
        <div className="p-4">
          <Button 
            variant="secondary" 
            className="w-full bg-[#F5F5F5] hover:bg-gray-200 text-gray-600"
          >
            <HelpCircle className="h-5 w-5 mr-2" />
            Help
          </Button>
        </div>
      </div>
    </div>
  )
}

