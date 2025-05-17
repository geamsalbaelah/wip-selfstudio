import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Clock, CreditCard, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Studio Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container-padded py-20 lg:py-32">
          <div className="max-w-3xl slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Capture Your Perfect Moments
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Professional self-photo studio with high-quality equipment and comfortable environment.
            </p>
            <div className="flex flex-wrap gap-4">
              {isAuthenticated ? (
                <Link to="/dashboard/booking" className="btn-primary py-3 px-8 text-base">
                  Book Your Session
                </Link>
              ) : (
                <Link to="/auth/register" className="btn-primary py-3 px-8 text-base">
                  Register Now
                </Link>
              )}
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 text-base">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book your photo session in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Your Session</h3>
              <p className="text-gray-600">
                Choose your preferred date, time, and package through our easy booking system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
              <p className="text-gray-600">
                Complete your booking by making payment through our secure payment methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit the Studio</h3>
              <p className="text-gray-600">
                Come to our studio at your scheduled time and enjoy your photo session.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16">
        <div className="container-padded">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package that suits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1 Person (10 min)</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">Rp20,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>10 minutes session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Professional lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Digital photos</span>
                  </li>
                </ul>
                <Link 
                  to={isAuthenticated ? "/dashboard/booking" : "/auth/login"} 
                  className="w-full btn-primary flex justify-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1 Person (15 min)</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">Rp25,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>15 minutes session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Professional lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Digital photos</span>
                  </li>
                </ul>
                <Link 
                  to={isAuthenticated ? "/dashboard/booking" : "/auth/login"} 
                  className="w-full btn-primary flex justify-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card overflow-hidden border border-primary-200 hover:border-primary-300 transition-colors duration-300 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2 People (15 min)</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">Rp40,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>15 minutes session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Professional lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Digital photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Multiple poses</span>
                  </li>
                </ul>
                <Link 
                  to={isAuthenticated ? "/dashboard/booking" : "/auth/login"} 
                  className="w-full btn-primary flex justify-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3 People (15 min)</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">Rp50,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>15 minutes session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Professional lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Digital photos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Group poses</span>
                  </li>
                </ul>
                <Link 
                  to={isAuthenticated ? "/dashboard/booking" : "/auth/login"} 
                  className="w-full btn-primary flex justify-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Additional person: <span className="font-medium">+Rp10,000 per person</span>
            </p>
            <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
              Contact us for group bookings
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our best moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-card group aspect-square">
              <img 
                src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-card group aspect-square">
              <img 
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-card group aspect-square">
              <img 
                src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-card group aspect-square">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            {isAuthenticated ? (
              <Link to="/dashboard/gallery" className="btn-primary">
                View Your Gallery
              </Link>
            ) : (
              <Link to="/auth/login" className="btn-primary">
                Login to See Your Photos
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-padded">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Book Your Session?</h2>
            <p className="text-lg opacity-90 mb-8">
              Don't miss the opportunity to capture your perfect moments with WIP Self Studio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {isAuthenticated ? (
                <Link to="/dashboard/booking" className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 text-base">
                  Book Now
                </Link>
              ) : (
                <>
                  <Link to="/auth/register" className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 text-base">
                    Register
                  </Link>
                  <Link to="/auth/login" className="btn bg-primary-600 text-white border border-white hover:bg-primary-500 py-3 px-8 text-base">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;