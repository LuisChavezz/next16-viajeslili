import { DashboardChart } from "@/src/features/dashboard/components/DashboardChart";
import { KpiList } from "@/src/features/dashboard/components/KpiList";


export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-4">
      <KpiList />
      <DashboardChart />
    </div>
  )
}