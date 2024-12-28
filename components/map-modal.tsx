import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface MapModalProps {
  isOpen: boolean
  onClose: () => void
  location?: string
}

export function MapModal({ isOpen, onClose, location }: MapModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0">
        <div className="relative h-[80vh] bg-muted">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Map view for {location}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

