import { LoginMicrosoftButton } from "@/src/features/auth/components/LoginMicrosoftButton";


export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sky-400 px-6 py-12">
      <div className="flex flex-col items-center w-[400px] bg-gray-100 rounded-md p-4 border border-slate-200 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)]">
        
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Bienvenido a Viajes Lili</h1>        
        <LoginMicrosoftButton />

      </div>
    </div>
  );
}
