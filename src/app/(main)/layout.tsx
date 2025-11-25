import { Header } from "@/src/components/Header";
import { MobileSidebar } from "@/src/components/MobileSidebar";
import { Sidebar } from "@/src/components/Sidebar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard"
}

export default async function HomeLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full flex overflow-hidden bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 shadow-lg border-r border-gray-200 p-4 hidden sm:block">
        <Sidebar />
      </aside>

      <MobileSidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-1 h-full">
        
        <header className="h-16 bg-white shadow-md border-b border-gray-200 flex items-center px-4">
          <Header />
        </header>

        {/* Main Content (Authenticated Routes) */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </main>
  );
}
