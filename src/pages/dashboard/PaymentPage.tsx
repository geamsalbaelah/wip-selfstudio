import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';
import { Booking, PaymentMethod } from '../../types';
import PaymentMethodSelector from '../../components/payment/PaymentMethodSelector';
import PaymentDetails from '../../components/payment/PaymentDetails';

const PaymentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { bookings } = useBookingStore();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('transfer');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      const foundBooking = bookings.find(b => b.id === id);
      if (foundBooking) {
        setBooking(foundBooking);
        setPaymentMethod(foundBooking.paymentMethod);
      }
    }
  }, [id, bookings]);
  
  const handlePaymentProofUpload = (file: File) => {
    setPaymentProof(file);
  };
  
  const handleSubmitPayment = () => {
    if (!booking) return;
    
    setIsLoading(true);
    
    // In a real app, you would upload the payment proof and process the payment
    // For now, we'll simulate a successful payment
    setTimeout(() => {
      navigate(`/dashboard/booking/${booking.id}`);
    }, 2000);
  };
  
  if (!booking) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-card p-12 text-center">
          <p className="text-gray-500 mb-4">Booking not found.</p>
          <Link to="/dashboard/history" className="btn-primary">
            Back to Booking History
          </Link>
        </div>
      </div>
    );
  }
  
  // If payment is already completed, redirect to booking details
  if (booking.paymentStatus === 'completed') {
    navigate(`/dashboard/booking/${booking.id}`);
    return null;
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Complete Your Payment</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
            
            <PaymentMethodSelector
              selectedMethod={paymentMethod}
              onSelectMethod={setPaymentMethod}
            />
          </div>
          
          <PaymentDetails
            totalAmount={booking.totalPrice}
            paymentMethod={paymentMethod}
            onPaymentProofUpload={handlePaymentProofUpload}
            onSubmitPayment={handleSubmitPayment}
            isLoading={isLoading}
          />
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-card p-6 sticky top-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Booking Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium text-right">
                  {new Date(booking.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{booking.startTime} - {booking.endTime}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Package:</span>
                <span className="font-medium">{booking.package.name}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">People:</span>
                <span className="font-medium">{booking.peopleCount}</span>
              </div>
              
              {booking.printOptions.length > 0 && (
                <div>
                  <span className="text-gray-600">Print Options:</span>
                  <ul className="mt-1 space-y-1">
                    {booking.printOptions.map((option) => (
                      <li key={option.id} className="text-gray-600 ml-2 text-sm">
                        - {option.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-3 mt-3 border-t border-gray-300 flex justify-between">
                <span className="text-gray-800 font-semibold">Total:</span>
                <span className="font-bold text-primary-600">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                  }).format(booking.totalPrice)}
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-xs text-gray-500">
              <p>
                By completing this payment, you agree to our{' '}
                <Link to="#" className="text-primary-600 hover:text-primary-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-primary-600 hover:text-primary-500">
                  Cancellation Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;