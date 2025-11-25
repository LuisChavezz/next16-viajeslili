import { IPaymentRequest, PaymentStatus } from "../interfaces/payments-request.type";


const BASE_URL = '/api/payments';

interface fetchPaymentRequestsOptions {
  status?: PaymentStatus;
}

export const fetchPaymentRequests = async ({ status }: fetchPaymentRequestsOptions): Promise<IPaymentRequest[]> => {

  // Fetch the token from cookies or any other secure storage
  const tokenResponse = await fetch('/api/me');
  const { token } = await tokenResponse.json();  

  // Construct the URL with optional status query parameter
  const url = status ? `${BASE_URL}?status=${status}` : BASE_URL;

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
  return data as IPaymentRequest[];

}