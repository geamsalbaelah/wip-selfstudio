import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useBookingStore } from '../../store/bookingStore';
import BookingCalendar from '../../components/calendar/BookingCalendar';

const BookingCalendarPage: React.FC = () => {
  const { getAvailableTimeSlots } = useBookingStore();
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Get available time slots for the selected date
  const timeSlots = getAvailableTimeSlots(selectedDate);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Calendar</h1>
        <p className="text-gray-600">
          Check available slots for your preferred date and time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <BookingCalendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Available Slots for {format(selectedDate, 'MMMM d, yyyy')}
            </h2>
            
            <div className="booking-calendar">
              {timeSlots.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.time}
                      className={`
                        py-2 px-3 text-center rounded-md text-sm font-medium
                        ${slot.isAvailable ? 'available' : 'booked'}
                      `}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No slots available for this date.
                </p>
              )}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-primary-50 border border-primary-500 rounded"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">Booked</span>
              </div>
            </div>
            
            <Link 
              to="/dashboard/booking" 
              className="w-full btn-primary flex justify-center mt-6"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendarPage;