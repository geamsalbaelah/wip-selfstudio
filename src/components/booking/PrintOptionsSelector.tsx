import React from 'react';
import { PrintOption } from '../../types';

interface PrintOptionsSelectorProps {
  printOptions: PrintOption[];
  selectedOptionIds: string[];
  onSelectOptions: (optionIds: string[]) => void;
}

const PrintOptionsSelector: React.FC<PrintOptionsSelectorProps> = ({
  printOptions,
  selectedOptionIds,
  onSelectOptions,
}) => {
  const handleToggleOption = (optionId: string) => {
    if (selectedOptionIds.includes(optionId)) {
      onSelectOptions(selectedOptionIds.filter(id => id !== optionId));
    } else {
      onSelectOptions([...selectedOptionIds, optionId]);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Print Options</h3>
      <div className="space-y-3">
        {printOptions.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              id={`option-${option.id}`}
              type="checkbox"
              checked={selectedOptionIds.includes(option.id)}
              onChange={() => handleToggleOption(option.id)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label
              htmlFor={`option-${option.id}`}
              className="ml-3 flex-1 text-gray-700"
            >
              {option.name}
            </label>
            <span className="text-gray-900 font-medium">
              {formatPrice(option.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintOptionsSelector;