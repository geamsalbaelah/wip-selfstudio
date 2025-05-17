import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Image, History, PlusCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useBookingStore } from '../../store/bookingStore';

const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();
  const { bookings } = useBookingStore();
  
  // Get upcoming bookings
  const upcomingBookings = bookings
    .filter(booking => booking.status === 'confirmed')
    .slice(0, 3);
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-card p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome, {user?.name || 'User'}!</h1>
        <p className="text-gray-600">
          Manage your bookings, view your gallery, and more from your dashboard.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Link 
          to="/dashboard/booking" 
          className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-primary-600" />
            </div>
            <PlusCircle className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Book Now</h3>
          <p className="text-gray-600 text-sm">
            Schedule a new photo session
          </p>
        </Link>
        
        <Link 
          to="/dashboard/booking-calendar" 
          className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <PlusCircle className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Booking Calendar</h3>
          <p className="text-gray-600 text-sm">
            View available slots on calendar
          </p>
        </Link>
        
        <Link 
          to="/dashboard/gallery" 
          className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Image className="h-6 w-6 text-primary-600" />
            </div>
            <PlusCircle className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">My Gallery</h3>
          <p className="text-gray-600 text-sm">
            View and download your photos
          </p>
        </Link>
        
        <Link 
          to="/dashboard/history" 
          className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <History className="h-6 w-6 text-primary-600" />
            </div>
            <PlusCircle className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Booking History</h3>
          <p className="text-gray-600 text-sm">
            View your past and upcoming bookings
          </p>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Bookings</h2>
          <Link to="/dashboard/history" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </Link>
        </div>
        
        {upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div 
                key={booking.id} 
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
              >
                <div className="flex items-center">
                  <div className="bg-primary-50 p-3 rounded-full mr-4 hidden sm:block">
                    <Calendar className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {new Date(booking.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {booking.startTime} - {booking.endTime} • {booking.package.name}
                    </p>
                  </div>
                </div>
                <Link 
                  to={`/dashboard/booking/${booking.id}`}
                  className="btn-secondary text-xs px-3 py-1"
                >
                  Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-500">You don't have any upcoming bookings.</p>
            <Link to="/dashboard/booking" className="mt-4 btn-primary inline-block">
              Book Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;