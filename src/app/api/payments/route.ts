import { NextResponse } from 'next/server';
import paymentRequests from '../../../features/payments/data/payments.data';


export async function GET(request: Request) {
  try {
    // Extract query params
    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const perPage = parseInt(searchParams.get('perPage') || '5', 10);

    // Filter payments by status if the status is provided
    let filteredPayments = paymentRequests;

    // Apply status filter
    if (statusFilter) {
      filteredPayments = paymentRequests.filter((payment) => 
        payment.status.toLocaleLowerCase() === statusFilter.toLocaleLowerCase()
      );
    }

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    filteredPayments = filteredPayments.slice(startIndex, endIndex);
    
    return NextResponse.json({
      data: filteredPayments,
      page,
      perPage,
      total: paymentRequests.length,
      totalPages: Math.ceil(paymentRequests.length / perPage),
    });

  } catch (error) {
    console.error('Error fetching payment requests:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
