import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import VerifyOtpPage from './pages/auth/VerifyOtpPage';

// Public Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

// User Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import BookingPage from './pages/dashboard/BookingPage';
import BookingCalendarPage from './pages/dashboard/BookingCalendarPage';
import MyAccountPage from './pages/dashboard/MyAccountPage';
import MyGalleryPage from './pages/dashboard/MyGalleryPage';
import BookingHistoryPage from './pages/dashboard/BookingHistoryPage';
import BookingDetailsPage from './pages/dashboard/BookingDetailsPage';
import PaymentPage from './pages/dashboard/PaymentPage';

// Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="verify-otp" element={<VerifyOtpPage />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="booking-calendar" element={<BookingCalendarPage />} />
          <Route path="booking/:id" element={<BookingDetailsPage />} />
          <Route path="payment/:id" element={<PaymentPage />} />
          <Route path="account" element={<MyAccountPage />} />
          <Route path="gallery" element={<MyGalleryPage />} />
          <Route path="history" element={<BookingHistoryPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          {/* Add more admin routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;