'use client'


import { PaymentRequestsFilters } from "./PaymentRequestsFilters";
import { useState } from "react";
import { PaymentRequestsTable } from "./PaymentRequestsTable";
import { PaymentStatus } from "../interfaces/payments-request.type";



export const PaymentRequestsList = () => {

  // State to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState<PaymentStatus | null>(null);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Solicitudes de Pago</h2>
        <PaymentRequestsFilters onFilterChange={setSelectedFilter} />
      </div>

      <div className="overflow-x-auto">
        <PaymentRequestsTable selectedFilter={selectedFilter} />
      </div>
    </div>
  );
}
