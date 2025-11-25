'use client'

import { CircleX } from "lucide-react"
import { useUIStore } from "../stores/ui.store";


export const CloseSidebarButton = () => {

  // Get the toggleSidebar action from the UI store
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);  

  return (
    <div 
      onClick={toggleSidebar}
      className="fixed top-4 right-4 z-50 block sm:hidden cursor-pointer" 
    >
      <CircleX size={ 32 } className="text-gray-700"/>
    </div>
  )
}
