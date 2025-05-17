import { create } from 'zustand';
import { Booking, BookingPackage, PrintOption, TimeSlot } from '../types';
import { addDays, format, parse, isSameDay } from 'date-fns';

interface BookingState {
  bookings: Booking[];
  packages: BookingPackage[];
  printOptions: PrintOption[];
  selectedDate: Date;
  selectedPackage: BookingPackage | null;
  selectedTimeSlot: string | null;
  selectedPrintOptions: string[];
  peopleCount: number;
  isLoading: boolean;
  error: string | null;
}

interface BookingActions {
  setSelectedDate: (date: Date) => void;
  setSelectedPackage: (packageId: string) => void;
  setSelectedTimeSlot: (time: string) => void;
  setSelectedPrintOptions: (optionIds: string[]) => void;
  setPeopleCount: (count: number) => void;
  getAvailableTimeSlots: (date: Date) => TimeSlot[];
  calculateTotalPrice: () => number;
  createBooking: () => Promise<Booking | null>;
  fetchBookings: () => Promise<void>;
}

type BookingStore = BookingState & BookingActions;

// Mock data for packages
const mockPackages: BookingPackage[] = [
  { id: '1', name: '1 Person (10 minutes)', peopleCount: 1, duration: 10, price: 20000 },
  { id: '2', name: '1 Person (15 minutes)', peopleCount: 1, duration: 15, price: 25000 },
  { id: '3', name: '2 People (15 minutes)', peopleCount: 2, duration: 15, price: 40000 },
  { id: '4', name: '3 People (15 minutes)', peopleCount: 3, duration: 15, price: 50000 },
];

// Mock data for print options
const mockPrintOptions: PrintOption[] = [
  { id: '1', name: 'Couple Shot', price: 5000 },
  { id: '2', name: 'Cetak 4R', price: 5000 },
  { id: '3', name: 'Cetak A4/10R', price: 10000 },
];

// Mock bookings data
const mockBookings: Booking[] = [
  {
    id: '1',
    userId: '1',
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '10:00',
    endTime: '10:30',
    packageId: '2',
    package: mockPackages[1],
    peopleCount: 1,
    printOptions: [mockPrintOptions[0]],
    totalPrice: 30000,
    status: 'confirmed',
    paymentStatus: 'completed',
    paymentMethod: 'transfer',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '1',
    date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
    startTime: '14:00',
    endTime: '14:30',
    packageId: '3',
    package: mockPackages[2],
    peopleCount: 2,
    printOptions: [mockPrintOptions[1], mockPrintOptions[2]],
    totalPrice: 55000,
    status: 'pending',
    paymentStatus: 'pending',
    paymentMethod: 'transfer',
    createdAt: new Date().toISOString(),
  },
];

// Generate time slots from 10:00 to 20:00 with 30-minute intervals
const generateTimeSlots = (date: Date, bookings: Booking[]): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const dateStr = format(date, 'yyyy-MM-dd');
  
  // Create slots from 10:00 to 20:00 with 30-minute intervals
  for (let hour = 10; hour < 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      // Check if the slot is available
      const isAvailable = !bookings.some(booking => 
        booking.date === dateStr && 
        booking.startTime === timeStr
      );
      
      slots.push({
        time: timeStr,
        isAvailable,
      });
    }
  }
  
  return slots;
};

export const useBookingStore = create<BookingStore>((set, get) => ({
  bookings: mockBookings,
  packages: mockPackages,
  printOptions: mockPrintOptions,
  selectedDate: new Date(),
  selectedPackage: null,
  selectedTimeSlot: null,
  selectedPrintOptions: [],
  peopleCount: 1,
  isLoading: false,
  error: null,

  setSelectedDate: (date) => set({ selectedDate: date }),
  
  setSelectedPackage: (packageId) => {
    const selectedPackage = get().packages.find(p => p.id === packageId) || null;
    set({ 
      selectedPackage,
      peopleCount: selectedPackage?.peopleCount || 1
    });
  },
  
  setSelectedTimeSlot: (time) => set({ selectedTimeSlot: time }),
  
  setSelectedPrintOptions: (optionIds) => set({ selectedPrintOptions: optionIds }),
  
  setPeopleCount: (count) => set({ peopleCount: count }),
  
  getAvailableTimeSlots: (date) => {
    return generateTimeSlots(date, get().bookings);
  },
  
  calculateTotalPrice: () => {
    const { selectedPackage, peopleCount, selectedPrintOptions, printOptions } = get();
    
    if (!selectedPackage) return 0;
    
    let totalPrice = selectedPackage.price;
    
    // Add price for additional people
    const additionalPeople = Math.max(0, peopleCount - selectedPackage.peopleCount);
    totalPrice += additionalPeople * 10000; // Each additional person costs 10,000
    
    // Add price for selected print options
    selectedPrintOptions.forEach(optionId => {
      const option = printOptions.find(o => o.id === optionId);
      if (option) {
        totalPrice += option.price;
      }
    });
    
    return totalPrice;
  },
  
  createBooking: async () => {
    const {
      selectedDate,
      selectedPackage,
      selectedTimeSlot,
      selectedPrintOptions,
      peopleCount,
      printOptions,
      calculateTotalPrice
    } = get();
    
    set({ isLoading: true, error: null });
    
    if (!selectedPackage || !selectedTimeSlot) {
      set({ 
        isLoading: false, 
        error: 'Package and time slot must be selected' 
      });
      return null;
    }
    
    try {
      // Calculate end time based on package duration
      const startTime = parse(selectedTimeSlot, 'HH:mm', new Date());
      const endTime = new Date(startTime.getTime() + selectedPackage.duration * 60000);
      const endTimeStr = format(endTime, 'HH:mm');
      
      // Get selected print options objects
      const selectedPrintOptionsObjects = printOptions.filter(
        option => selectedPrintOptions.includes(option.id)
      );
      
      // Calculate total price
      const totalPrice = calculateTotalPrice();
      
      // Create new booking
      const newBooking: Booking = {
        id: Math.random().toString(36).substring(2, 9), // Generate a random ID
        userId: '1', // Assume current user ID
        date: format(selectedDate, 'yyyy-MM-dd'),
        startTime: selectedTimeSlot,
        endTime: endTimeStr,
        packageId: selectedPackage.id,
        package: selectedPackage,
        peopleCount,
        printOptions: selectedPrintOptionsObjects,
        totalPrice,
        status: 'pending',
        paymentStatus: 'pending',
        paymentMethod: 'transfer',
        createdAt: new Date().toISOString(),
      };
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update bookings state
      set(state => ({
        bookings: [...state.bookings, newBooking],
        isLoading: false,
      }));
      
      return newBooking;
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to create booking' 
      });
      return null;
    }
  },
  
  fetchBookings: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would fetch bookings from the API
      // For now, we're using mock data
      set({ 
        bookings: mockBookings,
        isLoading: false,
      });
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch bookings' 
      });
    }
  },
}));