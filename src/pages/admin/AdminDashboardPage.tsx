import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Calendar, DollarSign, TrendingUp, ArrowUpRight, 
  ArrowDownRight, Package, UserPlus 
} from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-card p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Manage bookings, users, and view analytics for your studio.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <span className="flex items-center text-green-500 text-sm font-medium">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              12%
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Total Bookings</h3>
          <p className="text-3xl font-bold text-gray-800">124</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-primary-600" />
            </div>
            <span className="flex items-center text-green-500 text-sm font-medium">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              8.2%
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Total Revenue</h3>
          <p className="text-3xl font-bold text-gray-800">Rp4.5M</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <span className="flex items-center text-green-500 text-sm font-medium">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              5.3%
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Total Users</h3>
          <p className="text-3xl font-bold text-gray-800">87</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <span className="flex items-center text-red-500 text-sm font-medium">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              2.5%
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Conversion Rate</h3>
          <p className="text-3xl font-bold text-gray-800">68.2%</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
            <Link to="/admin/bookings" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 15, 2023</div>
                    <div className="text-sm text-gray-500">10:00 - 10:30</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    Rp25,000
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                    <div className="text-sm text-gray-500">jane@example.com</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 16, 2023</div>
                    <div className="text-sm text-gray-500">14:00 - 14:30</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    Rp40,000
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Robert Johnson</div>
                    <div className="text-sm text-gray-500">robert@example.com</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 17, 2023</div>
                    <div className="text-sm text-gray-500">12:30 - 13:00</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    Rp50,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Popular Packages</h2>
            <Link to="/admin/settings" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Manage
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-primary-50 p-3 rounded-full mr-4">
                <Package className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">2 People (15 minutes)</h3>
                <p className="text-sm text-gray-500">Rp40,000</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">42%</p>
                <p className="text-xs text-gray-500">of bookings</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-primary-50 p-3 rounded-full mr-4">
                <Package className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">1 Person (15 minutes)</h3>
                <p className="text-sm text-gray-500">Rp25,000</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">28%</p>
                <p className="text-xs text-gray-500">of bookings</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-primary-50 p-3 rounded-full mr-4">
                <Package className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">3 People (15 minutes)</h3>
                <p className="text-sm text-gray-500">Rp50,000</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">18%</p>
                <p className="text-xs text-gray-500">of bookings</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-primary-50 p-3 rounded-full mr-4">
                <Package className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">1 Person (10 minutes)</h3>
                <p className="text-sm text-gray-500">Rp20,000</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">12%</p>
                <p className="text-xs text-gray-500">of bookings</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">New Users</h2>
            <Link to="/admin/users" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                        <UserPlus className="h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">Sarah Wilson</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    sarah@example.com
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    +6281234567890
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 18, 2023
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                        <UserPlus className="h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">Michael Brown</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    michael@example.com
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    +6281234567891
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 17, 2023
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                        <UserPlus className="h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">Emily Clark</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    emily@example.com
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    +6281234567892
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 16, 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          
          <div className="flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center ring-8 ring-white">
                        <Calendar className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm font-medium text-gray-900">New Booking</div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          John Doe booked a session for May 20, 2023 at 15:00.
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <span>5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="relative pb-8">
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center ring-8 ring-white">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Payment Completed</div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Jane Smith completed payment for her booking on May 16, 2023.
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <span>30 minutes ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="relative pb-8">
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center ring-8 ring-white">
                        <UserPlus className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm font-medium text-gray-900">New User</div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Sarah Wilson registered a new account.
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <span>1 hour ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="relative">
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center ring-8 ring-white">
                        <Calendar className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Booking Canceled</div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Robert Johnson canceled his booking for May 19, 2023.
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <span>2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;