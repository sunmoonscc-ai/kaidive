import React, { useEffect } from 'react';

const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    if (item) {
      // Prevent scrolling on body when lightbox is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [item]);

  if (!item) return null;

  const getImageUrl = (url) => {
    if (url && url.includes('drive.google.com')) {
      const idMatch = url.match(/id=([^&]+)/);
      if (idMatch && idMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
      }
    }
    return url;
  };

  const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn" onClick={onClose}>
      <button 
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 p-2"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>

      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center animate-scaleIn" onClick={e => e.stopPropagation()}>
        {item.type === 'photo' && (
          <img 
            src={getImageUrl(item.url)} 
            alt={item.title || "Gallery Image"} 
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        )}
        
        {item.type === 'video' && (
          <video 
            src={item.url} 
            controls 
            autoPlay 
            className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
          />
        )}
        
        {item.type === 'youtube' && (
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeId(item.url)}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="w-full mt-4 text-center">
          {item.title && <h3 className="text-white text-xl font-headline-md">{item.title}</h3>}
          {item.description && <p className="text-gray-300 mt-2 font-body-md max-w-2xl mx-auto">{item.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
