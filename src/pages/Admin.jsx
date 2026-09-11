import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isAdmin } from '../config/roles';
import GalleryModal from '../components/Gallery/GalleryModal';
import GalleryAdminMgmt from '../components/admin/GalleryAdminMgmt';

const Admin = ({ user }) => {
  const [activeTab, setActiveTab] = useState('users');
  const { t } = useTranslation();
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  // Check if user is logged in and is an admin
  if (!user || !isAdmin(user.email)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-surface-mist pt-24 px-4 pb-12 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <div className="bg-surface-container-low rounded-xl p-4 shadow-sm mb-4">
          <h2 className="font-headline-sm text-deep-ocean font-bold">{t('admin.dashboard')}</h2>
          <p className="text-sm text-on-surface-variant mt-1 truncate">{user.email}</p>
        </div>
        
        <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-4 py-3 text-left rounded-xl font-medium transition-colors whitespace-nowrap ${activeTab === 'users' ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}
          >
            사용자 관리
          </button>
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-3 text-left rounded-xl font-medium transition-colors whitespace-nowrap ${activeTab === 'bookings' ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}
          >
            {t('admin.bookings')}
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-3 text-left rounded-xl font-medium transition-colors whitespace-nowrap ${activeTab === 'gallery' ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}
          >
            {t('admin.gallery')}
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-surface-container-low rounded-2xl shadow-sm p-6 min-h-[500px]">
        {activeTab === 'users' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-deep-ocean">사용자 관리</h3>
            <p className="text-on-surface-variant">사용자 목록 및 권한을 관리합니다.</p>
             {/* TODO: Implement Users Admin Component */}
          </div>
        )}
        {activeTab === 'bookings' && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-deep-ocean">{t('admin.bookingMgmt')}</h3>
            <p className="text-on-surface-variant">{t('admin.bookingDesc')}</p>
             {/* TODO: Implement Booking Admin Component */}
          </div>
        )}
        {activeTab === 'gallery' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-deep-ocean">{t('admin.galleryMgmt', '갤러리 관리')}</h3>
                <p className="text-on-surface-variant">{t('admin.galleryDesc', '사진/비디오를 업로드하고 삭제합니다.')}</p>
              </div>
              <button 
                onClick={() => setIsGalleryModalOpen(true)}
                className="bg-primary text-on-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">add</span> 새 미디어 추가
              </button>
            </div>
            
            <GalleryAdminMgmt />

            <GalleryModal 
              isOpen={isGalleryModalOpen} 
              onClose={() => setIsGalleryModalOpen(false)} 
              onUploadComplete={() => {
                alert('업로드가 완료되었습니다. 갤러리 페이지에서 확인하세요.');
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
