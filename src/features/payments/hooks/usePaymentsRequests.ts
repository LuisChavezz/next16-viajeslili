import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IPaymentRequest, PaymentStatus } from "../interfaces/payments-request.type";
import { fetchPaymentRequests } from "../services/actions";
import { useNotificationsStore } from "@/src/stores/notifications.store";


interface Options {
  status?: PaymentStatus;
}

export const usePaymentsRequests = ({ status }: Options) => {

  const queryClient = useQueryClient();

  // Access the notifications store to add notifications
  const addNotification = useNotificationsStore((state) => state.addNotification);

  // Fetch payment requests using React Query
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['paymentRequests', status],
    queryFn: () => fetchPaymentRequests({ status }),
  });

  // Function to update local status of a payment request and add a notification
  const updateLocalStatus = (id: string, newStatus: "Aprobado" | "Rechazado") => {
    // Update the local cache
    queryClient.setQueryData(["paymentRequests", status], (oldData: IPaymentRequest[]) => {
      if (!oldData) return oldData;

      return oldData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      );
    });

    // Add a notification about the status change
    addNotification({
      id: `notif-${Date.now()}`,
      title: `La solicitud de pago ${id} ha sido ${newStatus.toLowerCase()}.`,
      time: new Date().toLocaleString(),
      read: false,
    });
  };

  return {
    paymentRequests: data,
    isLoading,
    isError,
    updateLocalStatus,
  };
}