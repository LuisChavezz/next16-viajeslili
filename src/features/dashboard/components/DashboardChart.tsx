'use client'

import { formatDate } from "@/src/lib/formatDate"
import { useMemo } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { generateChartData } from "../lib/generateChartData"


export const DashboardChart = () => {

  // Memoized chart data that is generated once
  const data = useMemo(() => generateChartData(), []);

  return (
    <div className="w-full h-80 min-w-0 bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Monto de Transacciones por Día</h2>
      <ResponsiveContainer width="100%" height="90%" minWidth={0}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={formatDate}
          />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Monto']}
            labelFormatter={(label) => `Fecha: ${formatDate(label)}`}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#0369a1" 
            strokeWidth={2}
            name="Monto ($)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
