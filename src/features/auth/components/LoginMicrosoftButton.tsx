'use client'

import MicrosoftIcon from "@/src/ui/icons/MicrosoftIcon";
import { useRouter } from "next/navigation";


export const LoginMicrosoftButton = () => {
  
  const router = useRouter();

  // Simulate login process
  const handleLogin = () => {
    router.push('/auth/callback?code=mycode');
  }

  return (
    <div 
      onClick={ handleLogin }
      className="flex items-center justify-center gap-2 rounded-md px-4 py-2 text-white font-semibold cursor-pointer bg-sky-400 hover:bg-sky-500 transition-colors ease-in-out duration-200 "
    >
      <MicrosoftIcon className="w-8 h-8" />
      <span>Iniciar sesión con Microsoft</span>
    </div>
  )
}
