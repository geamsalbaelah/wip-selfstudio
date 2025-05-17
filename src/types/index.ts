// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isVerified: boolean;
  role: 'user' | 'admin';
  createdAt: string;
}

// Authentication Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Booking Types
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type PaymentMethod = 'transfer' | 'qris';

export type PaymentStatus = 'pending' | 'completed' | 'failed';

export interface BookingPackage {
  id: string;
  name: string;
  peopleCount: number;
  duration: number; // in minutes
  price: number;
}

export interface PrintOption {
  id: string;
  name: string;
  price: number;
}

export interface Booking {
  id: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  packageId: string;
  package: BookingPackage;
  peopleCount: number;
  printOptions: PrintOption[];
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  paymentProof?: string;
  createdAt: string;
}

// Time slot types
export interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  userId: string;
  bookingId: string;
  imageUrl: string;
  thumbnailUrl: string;
  createdAt: string;
}