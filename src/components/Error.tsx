export const ErrorDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-red-50 border border-red-200 rounded-lg">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
        <svg 
          className="w-8 h-8 text-red-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-red-800">Error al cargar</h3>
        <p className="text-red-600 mt-2">No se pudo cargar el contenido. Por favor, intenta nuevamente.</p>
      </div>

      <button 
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
      >
        Reintentar
      </button>
    </div>
  );
};
