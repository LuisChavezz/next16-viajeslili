import { IPaymentRequest, PaymentStatus } from "../interfaces/payments-request.type";


const BASE_URL = '/api/payments';

interface fetchPaymentRequestsOptions {
  status?: PaymentStatus;
  page?: number;
  perPage?: number;
}

interface Response {
  data: IPaymentRequest[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export const fetchPaymentRequests = async ({ status, page, perPage }: fetchPaymentRequestsOptions): Promise<Response> => {

  // Fetch the token from cookies or any other secure storage
  const tokenResponse = await fetch('/api/me');
  const { token } = await tokenResponse.json();  

  const params = new URLSearchParams();

  if (status) params.set('status', status);
  if (page) params.set('page', page.toString());
  if (perPage) params.set('perPage', perPage.toString());

  const url = `${BASE_URL}?${params.toString()}`;

  // Fetch payment requests from the API
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  // Handle non-OK responses
  if (!response.ok) {
    throw new Error('Failed to fetch payment requests');
  }

  const data = await response.json();
  return data as Response;

}