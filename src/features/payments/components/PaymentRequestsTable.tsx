import { LoadingSpinner } from "@/src/components/LoadingSpinner";
import { usePaymentsRequests } from "../hooks/usePaymentsRequests";
import { ErrorDisplay } from "@/src/components/Error";
import { formatCurrency } from "@/src/lib/formatCurrency";
import { formatDate } from "@/src/lib/formatDate";
import { Ban, Check } from "lucide-react";
import { getStatusColor } from "../lib/getStatusColor";
import { PaymentStatus } from "../interfaces/payments-request.type";


interface Props {
  selectedFilter: PaymentStatus | null;
}

export const PaymentRequestsTable = ({ selectedFilter }: Props) => {

  // Fetch payment requests using the custom hook
  const {
    paymentRequests,
    isLoading,
    isError,
    updateLocalStatus,
  } = usePaymentsRequests({
    status: selectedFilter ?? undefined,
  });

    // Handle loading and error states
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (isError) {
      return <ErrorDisplay />;
    }
    if (!paymentRequests || paymentRequests.length === 0) {
      return <div className="p-4 text-left text-gray-500">No hay solicitudes de pago disponibles.</div>;
    }

  return (
    <table className="w-full min-w-full text-sm">

      <thead className="bg-gray-50">
        <tr>
          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Proveedor</th>
          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Monto</th>
          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Estatus</th>
          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {paymentRequests.map((request) => (
          <tr key={request.id} className="hover:bg-gray-50">
            <td className="px-3 py-2">
              <div className="font-medium text-gray-900 truncate max-w-[100px]">{request.id}</div>
            </td>

            <td className="px-3 py-2">
              <div className="text-gray-900 truncate max-w-[120px]">{request.provider}</div>
            </td>

            <td className="px-3 py-2">
              <div className="font-medium text-gray-900">
                {formatCurrency(request.amount, request.currency)}
              </div>
            </td>

            <td className="px-3 py-2">
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                {request.status}
              </span>
            </td>

            <td className="px-3 py-2 text-gray-500">
              {formatDate(request.date)}
            </td>

            <td className="px-3 py-2">
              {request.status === 'Pendiente' && (
                <div className="flex space-x-1">
                  <button
                    className="px-1 py-0.5 bg-green-500 text-white text-xs rounded hover:bg-green-600 cursor-pointer"
                    onClick={() => updateLocalStatus(request.id, "Aprobado")}
                  >
                    <Check size={20} />
                  </button>
                  <button
                    className="px-1 py-0.5 bg-red-500 text-white text-xs rounded hover:bg-red-600 cursor-pointer"
                    onClick={() => updateLocalStatus(request.id, "Rechazado")}
                  >
                    <Ban size={20} />
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
