export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-sky-700 rounded-full animate-spin"></div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 font-medium">Cargando...</p>
        <p className="text-gray-400 text-sm mt-1">Por favor espere</p>
      </div>
    </div>
  );
};