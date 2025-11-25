'use client';

import { useUIStore } from "../stores/ui.store";
import { Sidebar } from "./Sidebar";


export const MobileSidebar = () => {

  // Get sidebar open state from the store
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  // If sidebar is not open, don't render anything
  if (!isSidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-50 sm:hidden">
      <div className="absolute inset-0 bg-white">
        <Sidebar />
      </div>
    </div>
  )
}