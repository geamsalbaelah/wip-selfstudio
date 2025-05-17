import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

const MyAccountPage: React.FC = () => {
  const { user, logout } = useAuthStore();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setProfileSuccess(false);
    setProfileError(null);
    
    // Basic validation
    if (!name || !email || !phone) {
      setProfileError('All fields are required');
      return;
    }
    
    // In a real app, you would call an API to update the profile
    // For now, we'll simulate a successful update
    setTimeout(() => {
      setProfileSuccess(true);
    }, 1000);
  };
  
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setPasswordSuccess(false);
    setPasswordError(null);
    
    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('All fields are required');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    
    // In a real app, you would call an API to update the password
    // For now, we'll simulate a successful update
    setTimeout(() => {
      setPasswordSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 1000);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Account</h1>
        <p className="text-gray-600">
          Manage your profile and account settings.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h2>
          
          {profileSuccess && (
            <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-md text-sm">
              Profile updated successfully!
            </div>
          )}
          
          {profileError && (
            <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">
              {profileError}
            </div>
          )}
          
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  +62
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input rounded-none rounded-r-md"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="btn-primary w-full">
                Update Profile
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
          
          {passwordSuccess && (
            <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-md text-sm">
              Password updated successfully!
            </div>
          )}
          
          {passwordError && (
            <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">
              {passwordError}
            </div>
          )}
          
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input"
              />
            </div>
            
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input"
              />
            </div>
            
            <div className="pt-4">
              <button type="submit" className="btn-primary w-full">
                Change Password
              </button>
            </div>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button 
              onClick={() => logout()}
              className="w-full btn-secondary bg-red-100 text-red-700 hover:bg-red-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;