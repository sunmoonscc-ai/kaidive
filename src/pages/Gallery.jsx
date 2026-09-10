import React, { useState, useEffect } from 'react';
import { isAdmin } from '../config/roles';
import { GALLERY_SCRIPT_URL } from '../config/api';
import GalleryModal from '../components/Gallery/GalleryModal';
import Lightbox from '../components/Gallery/Lightbox';

const Gallery = ({ user }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, photo, youtube

  const [lightboxItem, setLightboxItem] = useState(null);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const response = await fetch(GALLERY_SCRIPT_URL);
      const data = await response.json();
      
      // Filter out invalid items just in case
      const validData = data.filter(item => item.url && item.type);
      setItems(validData);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    
    try {
      const response = await fetch(GALLERY_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'delete', id })
      });
      
      const result = await response.json();
      
      if (result.status === 'success') {
        setItems(items.filter(item => item.id !== id));
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

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

  const filteredItems = items.filter(item => filter === 'all' || item.type === filter);

  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-gutter pt-section-gap-mobile md:pt-section-gap-desktop pb-32 relative">

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['all', 'photo', 'youtube'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full font-label-md transition-all ${
              filter === f 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-primary-container text-on-primary-container hover:bg-primary-fixed'
            }`}
          >
            {f === 'all' ? '전체보기' : f === 'photo' ? '사진' : '유튜브'}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-gray-100"
            onClick={() => setLightboxItem(item)}
          >
            {item.type === 'photo' && (
              <img src={getImageUrl(item.url)} alt={item.title || 'Gallery Item'} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
            )}
            {item.type === 'youtube' && (
              <div className="w-full h-full">
                <img src={`https://img.youtube.com/vi/${getYouTubeId(item.url)}/hqdefault.jpg`} alt="YouTube Thumbnail" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">play_circle</span>
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
              <div className="flex flex-col gap-1 mb-2 pointer-events-auto">
                {item.title && <h3 className="text-white font-headline-sm">{item.title}</h3>}
                {item.description && <p className="text-white/80 font-body-sm line-clamp-2">{item.description}</p>}
              </div>
            </div>

            {/* Admin Controls */}
            {isAdmin(user?.email) && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => handleDelete(e, item.id)}
                  className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg pointer-events-auto"
                  title="삭제"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
        </div>
      )}

      {!loading && items.length === 0 && (
        <div className="text-center py-12 text-on-surface-variant">
          아직 등록된 미디어가 없습니다.
        </div>
      )}
      
      <Lightbox 
        item={lightboxItem} 
        onClose={() => setLightboxItem(null)} 
      />
    </div>
  );
};

export default Gallery;
