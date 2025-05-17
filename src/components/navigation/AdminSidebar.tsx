import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Image, BarChart, Settings, 
  LogOut, ChevronRight, Camera, CreditCard 
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const { logout, user } = useAuthStore();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Users', path: '/admin/users', icon: <Users className="w-5 h-5" /> },
    { name: 'Bookings', path: '/admin/bookings', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Galleries', path: '/admin/galleries', icon: <Image className="w-5 h-5" /> },
    { name: 'Payments', path: '/admin/payments', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'Reports', path: '/admin/reports', icon: <BarChart className="w-5 h-5" /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
  ];
  
  const linkClasses = (path: string) => `
    flex items-center px-4 py-3 text-sm rounded-lg
    ${isActive(path)
      ? 'bg-primary-50 text-primary-700'
      : 'text-gray-700 hover:bg-gray-100'}
  `;

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex-shrink-0 px-6 py-4 flex items-center">
        <Camera className="h-8 w-8 text-primary-600" />
        <span className="ml-2 text-xl font-bold text-gray-800">Admin Panel</span>
      </div>
      
      <div className="px-4 py-2">
        <div className="bg-gray-50 rounded-lg p-3 mb-6">
          <div className="text-sm font-medium text-gray-700">Admin</div>
          <div className="text-base font-semibold text-gray-900">{user?.name || 'Administrator'}</div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 pb-4 space-y-1">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={linkClasses(item.path)}>
            <span className="text-gray-500 mr-3">{item.icon}</span>
            <span>{item.name}</span>
            {isActive(item.path) && (
              <ChevronRight className="w-4 h-4 ml-auto text-primary-500" />
            )}
          </Link>
        ))}
        
        <button 
          onClick={() => logout()}
          className="w-full flex items-center px-4 py-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
        >
          <span className="text-gray-500 mr-3">
            <LogOut className="w-5 h-5" />
          </span>
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;