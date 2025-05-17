import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClasses = `
    fixed w-full top-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}
  `;

  const linkClasses = `
    px-3 py-2 rounded-md text-sm font-medium transition-colors
    ${isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-primary-200'}
  `;

  const activeClasses = `
    ${isScrolled ? 'text-primary-600' : 'text-primary-200'}
  `;

  const mobileMenuClasses = `
    fixed inset-0 z-50 bg-white flex flex-col p-6 lg:hidden
    transform transition-transform duration-300 ease-in-out
    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container-padded">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Camera 
                  className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} 
                />
                <span 
                  className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                >
                  WIP Self Studio
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link 
                to="/" 
                className={`${linkClasses} ${location.pathname === '/' ? activeClasses : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className={`${linkClasses} ${location.pathname === '/contact' ? activeClasses : ''}`}
              >
                Contact
              </Link>
              
              {isAuthenticated ? (
                <Link 
                  to="/dashboard" 
                  className="ml-4 btn-primary"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    to="/auth/login" 
                    className={`${linkClasses} ${location.pathname === '/auth/login' ? activeClasses : ''}`}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/auth/register" 
                    className="ml-4 btn-primary"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md 
                ${isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={mobileMenuClasses}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Camera className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                WIP Self Studio
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-6 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-3 py-2 text-gray-800 text-base font-medium hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="px-3 py-2 text-gray-800 text-base font-medium hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="px-3 py-2 bg-primary-600 text-white text-base font-medium rounded-md hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link 
                  to="/auth/login" 
                  className="px-3 py-2 text-gray-800 text-base font-medium hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/auth/register" 
                  className="px-3 py-2 bg-primary-600 text-white text-base font-medium rounded-md hover:bg-primary-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;