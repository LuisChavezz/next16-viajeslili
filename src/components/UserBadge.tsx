import { User } from "lucide-react"


export const UserBadge = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center bg-sky-700 rounded-full p-1">
        <User size={20} className="text-white" />
      </div>
      <span className="text-gray-700">John Doe</span>
    </div>
  )
}
