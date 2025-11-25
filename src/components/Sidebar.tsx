import Image from "next/image"
import { sidebarItems } from "../constants/sidebar-items"
import { SidebarItem } from "./SidebarItem"
import { LogoutButton } from "./LogoutButton"
import { CloseSidebarButton } from "./CloseSidebarButton"


export const Sidebar = () => {
  return (
    <aside className="relative h-full flex flex-col p-4 sm:p-0">

      <CloseSidebarButton />

      {/* Logo */}
      <div className="mb-8">
        <Image
          src="https://www.viajeslili.com/css/clientes/viajes_lili/images/brand-primary.png"
          alt="logo"
          width={160}
          height={160}
          className="object-contain"
          priority
          style={{ 
            width: 'auto', 
            height: 'auto' 
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.href} item={item} />
        ))}
      </nav>

      {/* Logout */}
      <LogoutButton />

    </aside>
  )
}
