import { useState } from 'react';
import { PaymentStatus } from '../interfaces/payments-request.type';


interface FilterButtonsProps {
  onFilterChange?: (selectedFilter: PaymentStatus | null) => void;
}

export const PaymentRequestsFilters = ({ onFilterChange }: FilterButtonsProps) => {

  // State to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState<PaymentStatus | null>(null);

  // Available filter options
  const filters: PaymentStatus[] = ['Pendiente', 'Aprobado', 'Rechazado'];

  // Handle filter button click
  const handleFilterClick = (filter: PaymentStatus) => {
    const newFilter: PaymentStatus | null = selectedFilter === filter ? null : filter;
    setSelectedFilter(newFilter);
    onFilterChange?.(newFilter);
  };

  // Handle clear selection
  const handleClearSelection = () => {
    setSelectedFilter(null);
    onFilterChange?.(null);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 text-sm font-medium border-r border-gray-300 last:border-r-0 transition-all duration-200 ${
              selectedFilter === filter
                ? 'bg-sky-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <button
        onClick={handleClearSelection}
        disabled={!selectedFilter}
        className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg transition-all duration-200 ${
          selectedFilter
            ? 'text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            : 'text-gray-400 border-gray-200 cursor-not-allowed'
        }`}
      >
        Limpiar
      </button>
    </div>
  );
};