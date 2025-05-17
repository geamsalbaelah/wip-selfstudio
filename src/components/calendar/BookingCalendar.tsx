import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, 
         endOfWeek, isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

interface BookingCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  selectedDate, 
  onSelectDate 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { bookings } = useBookingStore();
  
  const getHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    );
  };
  
  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(currentDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div key={day} className="text-center font-medium text-gray-500 text-sm">
          {format(addDays(weekStartDate, day), 'E')}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{weekDays}</div>;
  };
  
  const generateDatesForCurrentMonth = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const rows = [];
    let days = [];
    let day = startDate;
    
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const dateStr = format(cloneDay, 'yyyy-MM-dd');
        
        // Check if there are any bookings on this day
        const dayHasBookings = bookings.some(booking => 
          booking.date === dateStr
        );
        
        days.push(
          <div 
            key={dateStr} 
            className={`
              h-12 flex items-center justify-center relative
              ${!isSameMonth(day, monthStart) ? 'text-gray-400' : 'cursor-pointer'}
              ${isSameDay(day, selectedDate) ? 'bg-primary-100 text-primary-700 font-medium rounded-lg' : ''}
              ${isSameMonth(day, monthStart) ? 'hover:bg-gray-100 rounded-lg' : ''}
            `}
            onClick={() => isSameMonth(day, monthStart) && onSelectDate(cloneDay)}
          >
            {format(day, 'd')}
            {dayHasBookings && isSameMonth(day, monthStart) && (
              <div className="absolute bottom-2 w-1 h-1 bg-primary-500 rounded-full"></div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }
    return <div className="space-y-1">{rows}</div>;
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {getHeader()}
      {getWeekDaysNames()}
      {generateDatesForCurrentMonth()}
    </div>
  );
};

export default BookingCalendar;