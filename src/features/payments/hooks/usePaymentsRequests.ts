import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IPaymentRequest, PaymentStatus } from "../interfaces/payments-request.type";
import { fetchPaymentRequests } from "../services/actions";
import { useNotificationsStore } from "@/src/stores/notifications.store";


interface Options {
  status?: PaymentStatus;
  page: number;
  perPage: number;
}

interface Response {
  data: IPaymentRequest[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export const usePaymentsRequests = ({ status, page, perPage }: Options) => {

  const queryClient = useQueryClient();

  // Access the notifications store to add notifications
  const addNotification = useNotificationsStore((state) => state.addNotification);

  // Fetch payment requests using React Query
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['paymentRequests', status],
    queryFn: () => fetchPaymentRequests({ status, page, perPage }),
  });

  // Function to update local status of a payment request and add a notification
  const updateLocalStatus = (id: string, newStatus: "Aprobado" | "Rechazado") => {
    // Update the local cache
    queryClient.setQueryData(["paymentRequests", status], (oldData: Response) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        data: oldData.data.map((request) =>
          request.id === id ? { ...request, status: newStatus } : request
        ),
      }
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
    paymentRequests: data?.data || [],
    page: data?.page || 1,
    perPage: data?.perPage || perPage,
    total: data?.total || 0,
    totalPages: data?.totalPages || 0,
    isLoading,
    isError,
    refetch,
    updateLocalStatus,
  };
}