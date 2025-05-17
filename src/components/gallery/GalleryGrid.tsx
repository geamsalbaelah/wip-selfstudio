import React, { useState } from 'react';
import { GalleryImage } from '../../types';
import { Download, X } from 'lucide-react';

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="bg-white rounded-lg overflow-hidden shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={image.thumbnailUrl} 
                alt="Gallery" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-600">
                {new Date(image.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Photo Preview</h3>
              <div className="flex space-x-2">
                <a 
                  href={selectedImage.imageUrl} 
                  download
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-1" />
                  Download
                </a>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="max-h-[70vh] flex items-center justify-center">
                <img 
                  src={selectedImage.imageUrl} 
                  alt="Gallery" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;