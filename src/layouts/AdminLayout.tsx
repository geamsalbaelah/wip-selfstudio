import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from '../components/navigation/AdminSidebar';
import AdminHeader from '../components/navigation/AdminHeader';
import { useAuthStore } from '../store/authStore';

const AdminLayout: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuthStore();
  
  // Redirect to login if not authenticated or not admin
  if (!isAuthenticated || !isAdmin()) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;