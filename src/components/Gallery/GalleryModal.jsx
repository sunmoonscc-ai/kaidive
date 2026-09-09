import React, { useState } from 'react';
import { GALLERY_SCRIPT_URL } from '../../config/api';

const GalleryModal = ({ isOpen, onClose, onUploadComplete }) => {
  const [type, setType] = useState('photo'); // photo, youtube
  
  // Photo items state
  const [photoItems, setPhotoItems] = useState([]);
  
  // Youtube state
  const [youtubeItem, setYoutubeItem] = useState({ url: '', title: '', description: '' });
  
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // for showing progress like "1 / 3"
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Function to convert file to base64
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = error => reject(error);
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newItems = files.map(file => ({
      file,
      title: '',
      description: '',
      previewUrl: URL.createObjectURL(file)
    }));

    setPhotoItems(prev => [...prev, ...newItems]);
    e.target.value = null; // reset input
  };

  const handlePhotoItemChange = (index, field, value) => {
    const updated = [...photoItems];
    updated[index][field] = value;
    setPhotoItems(updated);
  };

  const removePhotoItem = (index) => {
    const updated = photoItems.filter((_, i) => i !== index);
    setPhotoItems(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUploadProgress(0);

    try {
      if (type === 'photo') {
        if (photoItems.length === 0) throw new Error('사진을 최소 1장 이상 선택해주세요.');

        // 순차적으로 업로드 (구글 앱스 스크립트 동시 요청 제한 방지)
        for (let i = 0; i < photoItems.length; i++) {
          setUploadProgress(i + 1);
          const item = photoItems[i];
          const base64Data = await toBase64(item.file);
          
          const payload = {
            action: 'add',
            type: 'photo',
            title: item.title,
            description: item.description,
            base64Data,
            mimeType: item.file.type,
            fileName: item.file.name
          };

          const response = await fetch(GALLERY_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
          });
          
          const result = await response.json();
          if (result.status !== 'success') {
            throw new Error(result.message || `${i + 1}번째 사진 업로드 중 오류가 발생했습니다.`);
          }
        }
      } else if (type === 'youtube') {
        if (!youtubeItem.url) throw new Error('유튜브 링크를 입력해주세요.');
        
        const payload = {
          action: 'add',
          type: 'youtube',
          title: youtubeItem.title,
          description: youtubeItem.description,
          url: youtubeItem.url
        };

        const response = await fetch(GALLERY_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
        
        const result = await response.json();
        if (result.status !== 'success') {
          throw new Error(result.message || '업로드 중 오류가 발생했습니다.');
        }
      }

      onUploadComplete();
      resetFormAndClose();

    } catch (err) {
      setError(err.message || '업로드 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const resetFormAndClose = () => {
    setType('photo');
    setPhotoItems([]);
    setYoutubeItem({ url: '', title: '', description: '' });
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl animate-scaleIn relative overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex-shrink-0 flex justify-between items-center">
          <h2 className="text-2xl font-display-md text-deep-ocean">새 미디어 다중 추가</h2>
          <button 
            onClick={resetFormAndClose}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 overflow-y-auto flex-1">
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

          <div className="space-y-6">
            {/* Type Selector */}
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2">미디어 종류</label>
              <div className="flex gap-4">
                {['photo', 'youtube'].map((t) => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <input 
                      type="radio" 
                      name="type" 
                      value={t} 
                      checked={type === t} 
                      onChange={() => setType(t)}
                      className="text-primary-fixed focus:ring-primary-fixed w-4 h-4"
                    />
                    <span className="capitalize font-medium text-sm">{t === 'photo' ? '사진 (여러 장 가능)' : '유튜브'}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Photo Type View */}
            {type === 'photo' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">사진 파일 선택 (여러 장 동시 선택 가능)</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-container file:text-on-primary-container hover:file:bg-primary-container/80 transition-all cursor-pointer border border-dashed border-gray-300 rounded-xl p-4 bg-gray-50"
                  />
                </div>

                {/* Selected Photos List */}
                {photoItems.length > 0 && (
                  <div className="space-y-4 mt-6">
                    <h3 className="font-medium text-sm text-gray-700">업로드 할 사진 목록 ({photoItems.length}장)</h3>
                    {photoItems.map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-xl bg-white shadow-sm relative group">
                        <button 
                          type="button"
                          onClick={() => removePhotoItem(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-sm opacity-0 group-hover:opacity-100 sm:opacity-100"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                        
                        <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <img src={item.previewUrl} alt={`preview ${index}`} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-1 space-y-3 flex flex-col justify-center">
                          <input 
                            type="text" 
                            value={item.title}
                            onChange={(e) => handlePhotoItemChange(index, 'title', e.target.value)}
                            className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none"
                            placeholder="사진 제목 (선택)"
                          />
                          <textarea 
                            value={item.description}
                            onChange={(e) => handlePhotoItemChange(index, 'description', e.target.value)}
                            className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none resize-none h-16"
                            placeholder="사진 설명 (선택)"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Youtube Type View */}
            {type === 'youtube' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">유튜브 링크</label>
                  <input 
                    type="url" 
                    value={youtubeItem.url}
                    onChange={(e) => setYoutubeItem({...youtubeItem, url: e.target.value})}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">제목 (선택)</label>
                  <input 
                    type="text" 
                    value={youtubeItem.title}
                    onChange={(e) => setYoutubeItem({...youtubeItem, title: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none"
                    placeholder="제목을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">설명 (선택)</label>
                  <textarea 
                    value={youtubeItem.description}
                    onChange={(e) => setYoutubeItem({...youtubeItem, description: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none min-h-[100px]"
                    placeholder="간단한 설명을 입력하세요"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex-shrink-0 flex justify-end gap-3 bg-gray-50/50">
          <button 
            type="button" 
            onClick={resetFormAndClose}
            className="px-5 py-2.5 text-on-surface-variant hover:bg-gray-200 rounded-lg transition-colors font-medium"
          >
            취소
          </button>
          <button 
            onClick={handleSubmit}
            disabled={loading || (type === 'photo' && photoItems.length === 0)}
            className="px-6 py-2.5 bg-primary text-on-primary rounded-lg hover:saturate-150 transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-2 font-medium"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> 
                {type === 'photo' && photoItems.length > 1 
                  ? `${uploadProgress} / ${photoItems.length} 업로드 중...` 
                  : '저장 중...'}
              </>
            ) : (
              '저장하기'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default GalleryModal;
