import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ArrowLeft, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useNavigation } from "@/contexts/navigation-context"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { state, goBack } = useNavigation()
  const showBack = state.currentView !== 'main'

  return (
    <header className="bg-[#2B5335] text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {showBack && (
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-[#1f3d26]"
            onClick={goBack}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        )}
        <div className="text-xl font-semibold flex items-center gap-2">
          <Image 
            src="/2554-logo.png" 
            alt="The Warriors Logo" 
            width={24} 
            height={24}
            className="h-6 w-auto"
          />
          Inventory
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-[#1f3d26]"
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark"
          setTheme(newTheme)
          localStorage.setItem('theme', newTheme)
        }}
      >
        {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </Button>
    </header>
  )
}

