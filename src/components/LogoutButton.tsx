"use client";

import { useRouter } from "next/navigation";


export const LogoutButton = () => {
  const router = useRouter();

  // Handle user logout
  const handleLogout = async () => {
    await fetch("/auth/logout");
    router.push("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="border border-red-600 mt-auto px-2 py-1.5 text-center text-red-600 cursor-pointer hover:bg-red-200 rounded-lg transition ease-in-out duration-200"
    >
      Cerrar sesión
    </button>
  )
}
