import { render, screen } from '@testing-library/react';
import { KpiList } from '../src/features/dashboard/components/KpiList';

describe('KpiList component', () => {
  test('Render KpiList with correct KPI data', () => {
    render(<KpiList />);

    // Check for KPI titles
    expect(
      screen.getByText('Total de transacciones de hoy')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Monto conciliado del mes')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Pagos pendientes')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Proveedores activos')
    ).toBeInTheDocument();
    
    // Check for KPI values
    expect(screen.getByText('347')).toBeInTheDocument();
    expect(screen.getByText('$187,500 USD')).toBeInTheDocument();
    expect(screen.getByText('$74,500 USD')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();

    // Check for KPI additional info texts
    expect(
      screen.getByText(/Comparación con ayer/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Porcentaje cumplido/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Morosidad/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Tendencia/)
    ).toBeInTheDocument();
  });
});
