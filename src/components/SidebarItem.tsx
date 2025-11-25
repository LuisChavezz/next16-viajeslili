'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";


interface Props {
  item: {
    href: string;
    label: string;
    icon: React.ReactNode;
  };
}

export const SidebarItem = ({ item }: Props) => {

  const pathname = usePathname();

  return (
    <Link
      key={item.href}
      href={item.href}
      className={
        `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700 transition 
        ${ pathname === item.href ? 'bg-sky-200 font-medium hover:bg-sky-200' : ''}
      `}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  )
}
