import React from 'react';
import { PaymentMethod } from '../../types';
import { CreditCard, QrCode } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Payment Method
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          onClick={() => onSelectMethod('transfer')}
          className={`
            p-4 border rounded-lg flex items-center cursor-pointer transition-all
            ${
              selectedMethod === 'transfer'
                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500'
                : 'border-gray-200 hover:border-primary-200'
            }
          `}
        >
          <CreditCard className="w-6 h-6 text-primary-500 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Bank Transfer</h4>
            <p className="text-sm text-gray-500">Manual verification</p>
          </div>
        </div>
        
        <div
          onClick={() => onSelectMethod('qris')}
          className={`
            p-4 border rounded-lg flex items-center cursor-pointer transition-all
            ${
              selectedMethod === 'qris'
                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500'
                : 'border-gray-200 hover:border-primary-200'
            }
          `}
        >
          <QrCode className="w-6 h-6 text-primary-500 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">QRIS</h4>
            <p className="text-sm text-gray-500">Scan with any e-wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;