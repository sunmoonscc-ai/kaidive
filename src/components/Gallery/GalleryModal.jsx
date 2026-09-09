import React, { useState } from 'react';
import { GALLERY_SCRIPT_URL } from '../../config/api';

const GalleryModal = ({ isOpen, onClose, onUploadComplete }) => {
  const [type, setType] = useState('photo'); // photo, youtube
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Function to convert file to base64
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Remove the prefix "data:image/jpeg;base64,"
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = error => reject(error);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let payload = {
        action: 'add',
        type,
        title,
        description
      };

      if (type === 'photo') {
        if (!file) throw new Error('파일을 선택해주세요.');
        const base64Data = await toBase64(file);
        payload.base64Data = base64Data;
        payload.mimeType = file.type;
        payload.fileName = file.name;
      } else if (type === 'youtube') {
        if (!url) throw new Error('유튜브 링크를 입력해주세요.');
        payload.url = url;
      }

      const response = await fetch(GALLERY_SCRIPT_URL, {
        method: 'POST',
        // POST to Google Apps Script requires text/plain or application/x-www-form-urlencoded to avoid CORS preflight issues sometimes, but text/plain is safest.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      
      if (result.status === 'success') {
        onUploadComplete();
        onClose();
        // Reset form
        setType('photo');
        setFile(null);
        setUrl('');
        setTitle('');
        setDescription('');
      } else {
        throw new Error(result.message || '업로드 중 오류가 발생했습니다.');
      }

    } catch (err) {
      setError(err.message || '업로드 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl animate-scaleIn relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h2 className="text-2xl font-display-md text-deep-ocean mb-6">새 미디어 추가</h2>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">미디어 종류</label>
            <div className="flex gap-4">
              {['photo', 'youtube'].map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="type" 
                    value={t} 
                    checked={type === t} 
                    onChange={() => setType(t)}
                    className="text-primary-fixed focus:ring-primary-fixed"
                  />
                  <span className="capitalize">{t === 'photo' ? '사진' : '유튜브'}</span>
                </label>
              ))}
            </div>
          </div>

          {type === 'photo' && (
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">사진 파일 선택</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-container file:text-on-primary-container hover:file:bg-primary-container/80 transition-all cursor-pointer"
              />
            </div>
          )}

          {type === 'youtube' && (
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">유튜브 링크</label>
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">제목 (선택)</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none"
              placeholder="제목을 입력하세요"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">설명 (선택)</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-fixed focus:border-primary-fixed outline-none min-h-[100px]"
              placeholder="간단한 설명을 입력하세요"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-on-surface-variant hover:bg-gray-100 rounded-lg transition-colors"
            >
              취소
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="px-6 py-2 bg-primary text-on-primary rounded-lg hover:saturate-150 transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <><span className="material-symbols-outlined animate-spin text-sm">progress_activity</span> 업로드 중...</>
              ) : (
                '저장'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryModal;
