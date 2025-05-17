import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Booking, BookingStatus, PaymentStatus } from '../../types';
import { Calendar, Clock, DollarSign, ChevronRight } from 'lucide-react';

interface BookingHistoryListProps {
  bookings: Booking[];
}

const BookingHistoryList: React.FC<BookingHistoryListProps> = ({ bookings }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Confirmed
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
    }
  };
  
  const getPaymentStatusBadge = (status: PaymentStatus) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Paid
          </span>
        );
      case 'failed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
    }
  };
  
  if (bookings.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-card p-6 text-center">
        <p className="text-gray-500">You don't have any bookings yet.</p>
        <Link to="/dashboard/booking" className="mt-4 btn-primary inline-block">
          Book Now
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div className="flex items-center mb-2 sm:mb-0">
                <div className="bg-primary-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Booking on{' '}
                  {format(new Date(booking.date), 'MMM d, yyyy')}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(booking.status)}
                {getPaymentStatusBadge(booking.paymentStatus)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Time</p>
                  <p className="text-gray-900">{booking.startTime} - {booking.endTime}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-gray-400 mt-0.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Package</p>
                  <p className="text-gray-900">{booking.package.name}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <DollarSign className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Price</p>
                  <p className="text-gray-900 font-semibold">{formatPrice(booking.totalPrice)}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Link
                to={`/dashboard/booking/${booking.id}`}
                className="flex items-center text-primary-600 hover:text-primary-700"
              >
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistoryList;