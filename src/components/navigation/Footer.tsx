import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padded py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Camera className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">WIP Self Studio</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional photo studio with comfortable environment and high-quality equipment.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/628123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@wipstudio.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/auth/login" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Studio Street, Photography District, Jakarta
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                <a 
                  href="tel:+628123456789" 
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +62 812 3456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                <a 
                  href="mailto:info@wipstudio.com" 
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@wipstudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} WIP Self Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;