import React from 'react';
import { format } from 'date-fns';
import { BookingPackage, PrintOption } from '../../types';

interface BookingSummaryProps {
  date: Date;
  timeSlot: string | null;
  selectedPackage: BookingPackage | null;
  peopleCount: number;
  selectedPrintOptions: PrintOption[];
  totalPrice: number;
  onConfirm: () => void;
  isLoading: boolean;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  date,
  timeSlot,
  selectedPackage,
  peopleCount,
  selectedPrintOptions,
  totalPrice,
  onConfirm,
  isLoading,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Date:</span>
          <span className="font-medium">{format(date, 'EEEE, MMMM d, yyyy')}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Time:</span>
          <span className="font-medium">{timeSlot || '-'}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Package:</span>
          <span className="font-medium">{selectedPackage?.name || '-'}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Number of People:</span>
          <span className="font-medium">{peopleCount}</span>
        </div>
        
        {selectedPrintOptions.length > 0 && (
          <div>
            <span className="text-gray-600">Print Options:</span>
            <ul className="mt-1 space-y-1">
              {selectedPrintOptions.map((option) => (
                <li key={option.id} className="flex justify-between">
                  <span className="text-gray-600 ml-2">- {option.name}</span>
                  <span>{formatPrice(option.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="pt-3 border-t border-gray-300 flex justify-between">
          <span className="text-gray-800 font-semibold">Total Price:</span>
          <span className="font-bold text-primary-600">{formatPrice(totalPrice)}</span>
        </div>
      </div>
      
      <button
        onClick={onConfirm}
        disabled={!selectedPackage || !timeSlot || isLoading}
        className={`
          w-full mt-6 btn-primary py-3
          ${(!selectedPackage || !timeSlot || isLoading) ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {isLoading ? 'Processing...' : 'Confirm Booking'}
      </button>
    </div>
  );
};

export default BookingSummary;