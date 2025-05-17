import React from 'react';
import { TimeSlot } from '../../types';

interface TimeSlotPickerProps {
  timeSlots: TimeSlot[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  timeSlots,
  selectedTime,
  onSelectTime,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Select Time</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {timeSlots.map((slot) => (
          <button
            key={slot.time}
            onClick={() => slot.isAvailable && onSelectTime(slot.time)}
            disabled={!slot.isAvailable}
            className={`
              py-2 px-3 text-center rounded-md text-sm font-medium transition-colors
              ${
                selectedTime === slot.time
                  ? 'bg-primary-600 text-white'
                  : slot.isAvailable
                  ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;