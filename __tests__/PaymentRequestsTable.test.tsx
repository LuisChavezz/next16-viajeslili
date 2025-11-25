import { render, screen, fireEvent } from '@testing-library/react';
import { PaymentRequestsTable } from '../src/features/payments/components/PaymentRequestsTable';
import { PaymentStatus } from '../src/features/payments/interfaces/payments-request.type';


const mockUpdateLocalStatus = jest.fn();

// Mock implementation of the usePaymentsRequests hook
jest.mock('../src/features/payments/hooks/usePaymentsRequests', () => ({
  usePaymentsRequests: () => ({ // Return mock data and functions
    paymentRequests: [ // Mock data
      {
        id: '1',
        provider: 'Proveedor A',
        amount: 1000,
        currency: 'USD',
        status: 'Pendiente' as PaymentStatus,
        date: new Date().toISOString(),
      },
      {
        id: '2',
        provider: 'Proveedor B',
        amount: 500,
        currency: 'USD',
        status: 'Aprobado' as PaymentStatus,
        date: new Date().toISOString(),
      },
    ],
    isLoading: false,
    isError: false,
    updateLocalStatus: mockUpdateLocalStatus, // Mock function
  }),
}));

describe('PaymentRequestsTable integration', () => {
  test('Approve button updates status to Aprobado', () => { // Test for Approve button functionality
    render(<PaymentRequestsTable selectedFilter={null} />); // Render component with no filter

    // Check that the pending row exists
    const pendingBadge = screen.getByText('Pendiente'); // Get the element with text 'Pendiente'
    expect(pendingBadge).toBeInTheDocument(); // Ensure the pending status is rendered

    // Click on Approve button
    const approveButton = screen.getAllByRole('button')[0]; // the first one is Approve
    fireEvent.click(approveButton); // Simulate click

    // Check that updateLocalStatus was called with the correct arguments
    expect(mockUpdateLocalStatus).toHaveBeenCalledWith('1', 'Aprobado');
  });
});
