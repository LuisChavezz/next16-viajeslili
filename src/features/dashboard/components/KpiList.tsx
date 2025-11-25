

export const KpiList = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="flex flex-col bg-white shadow rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-500">Total de transacciones de hoy</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 flex-1">347</p>
        <p className="mt-1 text-sm text-green-600">Comparación con ayer: +28 transacciones (+8.7%)</p>
      </div>

      <div className="flex flex-col bg-white shadow rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-500">Monto conciliado del mes</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 flex-1">$187,500 USD</p>
        <p className="mt-1 text-sm text-gray-600">Porcentaje cumplido: 75%</p>
      </div>

      <div className="flex flex-col bg-white shadow rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-500">Pagos pendientes</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 flex-1">$74,500 USD</p>
        <p className="mt-1 text-sm text-red-600">Morosidad: 4.8%</p>
      </div>

      <div className="flex flex-col bg-white shadow rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-500">Proveedores activos</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 flex-1">42</p>
        <p className="mt-1 text-sm text-gray-600">Tendencia: +3 proveedores vs mes anterior</p>
      </div>

    </div>
  )
}
