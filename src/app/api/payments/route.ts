import { NextResponse } from 'next/server';
import paymentRequests from '../../../features/payments/data/payments.data';


export async function GET(request: Request) {
  try {
    // Extract query params
    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get('status');

    // Filter payments by status if the status is provided
    let filteredPayments = paymentRequests;

    // Apply status filter
    if (statusFilter) {
      filteredPayments = paymentRequests.filter((payment) => 
        payment.status.toLocaleLowerCase() === statusFilter.toLocaleLowerCase()
      );
    }
    
    return NextResponse.json(filteredPayments);

  } catch (error) {
    console.error('Error fetching payment requests:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
