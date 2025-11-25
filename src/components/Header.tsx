import { Notifications } from "./Notifications";
import { ToggleSidebarButton } from "./ToggleSidebarButton";
import { UserBadge } from "./UserBadge";


export const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <ToggleSidebarButton />

      <div className="flex-1 md:flex-none"></div>
      
      <div className="flex items-center ">
        <UserBadge />
        <span className="mx-2 text-lg text-gray-700">|</span>
        <Notifications />
      </div>

    </div>
  )
}
