import React, { useState } from 'react';
import { UploadCloud as CloudUpload } from 'lucide-react';
import { PaymentMethod } from '../../types';

interface PaymentDetailsProps {
  totalAmount: number;
  paymentMethod: PaymentMethod;
  onPaymentProofUpload: (file: File) => void;
  onSubmitPayment: () => void;
  isLoading: boolean;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  totalAmount,
  paymentMethod,
  onPaymentProofUpload,
  onSubmitPayment,
  isLoading,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onPaymentProofUpload(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Details</h3>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Total Amount:</span>
          <span className="font-bold text-primary-600">{formatPrice(totalAmount)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Payment Method:</span>
          <span className="font-medium">
            {paymentMethod === 'transfer' ? 'Bank Transfer' : 'QRIS'}
          </span>
        </div>
      </div>
      
      {paymentMethod === 'transfer' ? (
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-2">Bank Transfer Instructions</h4>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 mb-2">
              Please transfer the exact amount to the following account:
            </p>
            <div className="space-y-1 text-blue-700">
              <p><span className="font-medium">Bank:</span> BCA</p>
              <p><span className="font-medium">Account Number:</span> 1234567890</p>
              <p><span className="font-medium">Account Name:</span> WIP Self Studio</p>
              <p><span className="font-medium">Amount:</span> {formatPrice(totalAmount)}</p>
            </div>
            <p className="mt-3 text-sm text-blue-800">
              After making the transfer, please upload your payment proof below.
            </p>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Payment Proof
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {previewUrl ? (
                  <img src={previewUrl} alt="Payment proof" className="mx-auto h-32 object-contain" />
                ) : (
                  <CloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                )}
                
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-2">QRIS Payment</h4>
          <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
            <img 
              src="https://images.pexels.com/photos/8962218/pexels-photo-8962218.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="QRIS Code" 
              className="h-64 object-contain" 
            />
          </div>
          <p className="mt-3 text-sm text-center text-gray-600">
            Scan the QR code above with your preferred e-wallet application.
          </p>
        </div>
      )}
      
      <button
        onClick={onSubmitPayment}
        disabled={paymentMethod === 'transfer' && !selectedFile || isLoading}
        className={`
          w-full btn-primary py-3
          ${(paymentMethod === 'transfer' && !selectedFile || isLoading) ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {isLoading ? 'Processing...' : 'Confirm Payment'}
      </button>
    </div>
  );
};

export default PaymentDetails;