import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useBookingStore } from '../../store/bookingStore';
import TimeSlotPicker from '../../components/booking/TimeSlotPicker';
import PackageSelector from '../../components/booking/PackageSelector';
import PeopleCountSelector from '../../components/booking/PeopleCountSelector';
import PrintOptionsSelector from '../../components/booking/PrintOptionsSelector';
import BookingSummary from '../../components/booking/BookingSummary';

const BookingPage: React.FC = () => {
  const {
    selectedDate,
    selectedPackage,
    selectedTimeSlot,
    selectedPrintOptions,
    peopleCount,
    packages,
    printOptions,
    isLoading,
    setSelectedDate,
    setSelectedPackage,
    setSelectedTimeSlot,
    setSelectedPrintOptions,
    setPeopleCount,
    getAvailableTimeSlots,
    calculateTotalPrice,
    createBooking,
  } = useBookingStore();
  
  const navigate = useNavigate();
  
  // Get printOptions objects from IDs
  const selectedPrintOptionsObjects = printOptions.filter(option => 
    selectedPrintOptions.includes(option.id)
  );
  
  // Calculate total price
  const totalPrice = calculateTotalPrice();
  
  // Get available time slots for the selected date
  const timeSlots = getAvailableTimeSlots(selectedDate);
  
  const handleConfirmBooking = async () => {
    const booking = await createBooking();
    if (booking) {
      navigate(`/dashboard/payment/${booking.id}`);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Book a Session</h1>
        <p className="text-gray-600">
          Select your preferred date, time, and package to book your photo session.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Select Date & Time</h2>
            
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={format(new Date(), 'yyyy-MM-dd')}
                value={format(selectedDate, 'yyyy-MM-dd')}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="input"
              />
            </div>
            
            <TimeSlotPicker
              timeSlots={timeSlots}
              selectedTime={selectedTimeSlot}
              onSelectTime={setSelectedTimeSlot}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Select Package & Options</h2>
            
            <PackageSelector
              packages={packages}
              selectedPackageId={selectedPackage?.id || null}
              onSelectPackage={setSelectedPackage}
            />
            
            {selectedPackage && (
              <PeopleCountSelector
                peopleCount={peopleCount}
                minPeople={selectedPackage.peopleCount}
                onPeopleCountChange={setPeopleCount}
              />
            )}
            
            <PrintOptionsSelector
              printOptions={printOptions}
              selectedOptionIds={selectedPrintOptions}
              onSelectOptions={setSelectedPrintOptions}
            />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-card p-6 sticky top-6">
            <BookingSummary
              date={selectedDate}
              timeSlot={selectedTimeSlot}
              selectedPackage={selectedPackage}
              peopleCount={peopleCount}
              selectedPrintOptions={selectedPrintOptionsObjects}
              totalPrice={totalPrice}
              onConfirm={handleConfirmBooking}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;