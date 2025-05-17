import React, { useState } from 'react';
import GalleryGrid from '../../components/gallery/GalleryGrid';
import { GalleryImage } from '../../types';

const MyGalleryPage: React.FC = () => {
  // Mock gallery images
  const [images] = useState<GalleryImage[]>([
    {
      id: '1',
      userId: '1',
      bookingId: '1',
      imageUrl: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnailUrl: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2023-05-15T10:30:00Z',
    },
    {
      id: '2',
      userId: '1',
      bookingId: '1',
      imageUrl: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnailUrl: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2023-05-15T10:35:00Z',
    },
    {
      id: '3',
      userId: '1',
      bookingId: '1',
      imageUrl: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnailUrl: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2023-05-15T10:40:00Z',
    },
    {
      id: '4',
      userId: '1',
      bookingId: '2',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2023-06-20T14:15:00Z',
    },
    {
      id: '5',
      userId: '1',
      bookingId: '2',
      imageUrl: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnailUrl: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2023-06-20T14:20:00Z',
    },
    {
      id: '6',
      userId: '1',
      bookingId: '2',
      imageUrl: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnailUrl: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
      createdAt: '2023-06-20T14:25:00Z',
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Gallery</h1>
        <p className="text-gray-600">
          View and download your photos from previous sessions.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6">
        {images.length > 0 ? (
          <GalleryGrid images={images} />
        ) : (
          <div className="text-center p-12">
            <div className="mb-4 text-gray-400">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No photos yet</h3>
            <p className="text-gray-500 mb-4">
              Your photos will appear here after your photo sessions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGalleryPage;