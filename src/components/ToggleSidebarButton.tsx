'use client'

import { Menu } from "lucide-react";
import { useUIStore } from "../stores/ui.store";


export const ToggleSidebarButton = () => {

  // Get the toggleSidebar action from the UI store
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <div
      onClick={toggleSidebar}
      className="flex items-center justify-center cursor-pointer sm:hidden"
    >
      <Menu />
    </div>
  )
}
