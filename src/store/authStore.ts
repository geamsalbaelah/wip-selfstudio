import { create } from 'zustand';
import { AuthState, User } from '../types';

// Mock function for API calls (to be replaced with actual API)
const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password') {
        resolve({
          id: 'admin',
          name: 'Administrator',
          email: 'admin@example.com',
          phone: '+628123456789',
          isVerified: true,
          role: 'admin',
          createdAt: new Date().toISOString(),
        });
      } else if (email === 'user@example.com' && password === 'password') {
        resolve({
          id: '1',
          name: 'John Doe',
          email: 'user@example.com',
          phone: '+628123456789',
          isVerified: true,
          role: 'user',
          createdAt: new Date().toISOString(),
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, phone: string, password: string) => Promise<void>;
  verifyOtp: (phone: string, otp: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const user = await mockLogin(email, password);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to login' 
      });
    }
  },

  register: async (name, email, phone, password) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = {
        id: '2',
        name,
        email,
        phone,
        isVerified: false,
        role: 'user' as const,
        createdAt: new Date().toISOString(),
      };
      
      set({ 
        user, 
        isAuthenticated: false,
        isLoading: false 
      });
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to register' 
      });
    }
  },

  verifyOtp: async (phone, otp) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({ 
        user: state.user ? {
          ...state.user,
          isVerified: true,
        } : null,
        isAuthenticated: true,
        isLoading: false 
      }));
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to verify OTP' 
      });
    }
  },

  resetPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ isLoading: false });
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'Failed to reset password' 
      });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  isAdmin: () => {
    const { user } = get();
    return user?.role === 'admin';
  },
}));