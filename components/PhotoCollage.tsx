
import React, { useMemo } from 'react';
import { Photo } from '../types';

const PhotoCollage: React.FC = () => {
  const photos: Photo[] = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      url: `https://picsum.photos/300/400?random=${i}`,
      rotation: Math.random() * 40 - 20,
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 80 + 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="absolute w-32 h-44 md:w-48 md:h-64 bg-white p-2 shadow-xl border border-gray-100 animate-in zoom-in fade-in duration-1000"
          style={{
            left: `${photo.x}%`,
            top: `${photo.y}%`,
            transform: `translate(-50%, -50%) rotate(${photo.rotation}deg)`,
            animationDelay: `${index * 0.2}s`,
            animationFillMode: 'backwards'
          }}
        >
          <img
            src={photo.url}
            alt="Memory"
            className="w-full h-full object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-300 pointer-events-auto cursor-zoom-in"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] font-romantic z-20 pointer-events-auto">
          Love You Forever
        </h2>
      </div>
    </div>
  );
};

export default PhotoCollage;
