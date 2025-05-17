import React, { useEffect } from 'react';
import { useBookingStore } from '../../store/bookingStore';
import BookingHistoryList from '../../components/booking/BookingHistoryList';

const BookingHistoryPage: React.FC = () => {
  const { bookings, fetchBookings, isLoading } = useBookingStore();
  
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking History</h1>
        <p className="text-gray-600">
          View all your past and upcoming bookings.
        </p>
      </div>
      
      {isLoading ? (
        <div className="text-center p-12">
          <p className="text-gray-500">Loading booking history...</p>
        </div>
      ) : (
        <BookingHistoryList bookings={bookings} />
      )}
    </div>
  );
};

export default BookingHistoryPage;