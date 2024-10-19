import React, { useState, useEffect } from 'react';

function RandomPhotoGrid() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
      const data = await response.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="relative">
          <img src={photo.download_url} alt={`Photo ${index}`} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white">
            <p className="text-center">{photo.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RandomPhotoGrid;