import React from 'react';
import { BookingPackage } from '../../types';

interface PackageSelectorProps {
  packages: BookingPackage[];
  selectedPackageId: string | null;
  onSelectPackage: (packageId: string) => void;
}

const PackageSelector: React.FC<PackageSelectorProps> = ({
  packages,
  selectedPackageId,
  onSelectPackage,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Select Package</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => onSelectPackage(pkg.id)}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${
                selectedPackageId === pkg.id
                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500'
                  : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
              }
            `}
          >
            <h4 className="font-medium text-gray-900">{pkg.name}</h4>
            <p className="text-gray-500 text-sm mt-1">
              {pkg.duration} minutes
            </p>
            <p className="text-gray-500 text-sm">
              {pkg.peopleCount} {pkg.peopleCount > 1 ? 'people' : 'person'}
            </p>
            <p className="mt-2 text-lg font-semibold text-primary-600">
              {formatPrice(pkg.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageSelector;