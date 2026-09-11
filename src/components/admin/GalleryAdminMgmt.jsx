import React, { useState, useEffect } from 'react';
import { GALLERY_SCRIPT_URL } from '../../config/api';

const getImageUrl = (url) => {
  if (url && url.includes('drive.google.com')) {
    const idMatch = url.match(/id=([^&]+)/);
    if (idMatch && idMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${idMatch[1]}=w400`;
    }
  }
  return url;
};

const getYouTubeId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?]+)/);
  return match ? match[1] : null;
};

const GalleryAdminMgmt = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingOrder, setSavingOrder] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // id of the item being edited
  const [editForm, setEditForm] = useState({ title: '', description: '' });
  const [savingEdit, setSavingEdit] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(GALLERY_SCRIPT_URL);
      const data = await response.json();
      const validData = data.filter(item => item.url && item.type);
      setItems(validData);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const moveItem = (index, direction) => {
    const newItems = [...items];
    if (direction === 'up' && index > 0) {
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
      setItems(newItems);
    } else if (direction === 'down' && index < newItems.length - 1) {
      [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
      setItems(newItems);
    }
  };

  const handleSaveOrder = async () => {
    setSavingOrder(true);
    try {
      const orderedIds = items.map(item => item.id);
      const response = await fetch(GALLERY_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'reorder', orderedIds })
      });
      const result = await response.json();
      if (result.status === 'success') {
        alert('순서가 저장되었습니다.');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error saving order:", error);
      alert('순서 저장 중 오류가 발생했습니다. 구글 앱스 스크립트에서 reorder API를 처리하는지 확인해주세요.');
    } finally {
      setSavingOrder(false);
    }
  };

  const startEditing = (item) => {
    setEditingItem(item.id);
    setEditForm({ title: item.title || '', description: item.description || '' });
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setEditForm({ title: '', description: '' });
  };

  const handleSaveEdit = async (id) => {
    setSavingEdit(true);
    try {
      const response = await fetch(GALLERY_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ 
          action: 'update', 
          id, 
          title: editForm.title, 
          description: editForm.description 
        })
      });
      const result = await response.json();
      if (result.status === 'success') {
        // Update local state
        setItems(items.map(item => item.id === id ? { ...item, title: editForm.title, description: editForm.description } : item));
        cancelEditing();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error updating item:", error);
      alert('수정 중 오류가 발생했습니다. 구글 앱스 스크립트에서 update API를 처리하는지 확인해주세요.');
    } finally {
      setSavingEdit(false);
    }
  };

  const handleDelete = async (id) => {
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

  if (loading) {
    return (
      <div className="flex justify-center py-12 bg-white rounded-xl border">
        <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-bold text-deep-ocean">업로드된 미디어 관리</h4>
        <button 
          onClick={handleSaveOrder}
          disabled={savingOrder}
          className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
        >
          {savingOrder ? (
            <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
          ) : (
            <span className="material-symbols-outlined text-sm">save</span>
          )}
          순서 저장
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-on-surface-variant text-center py-8">등록된 미디어가 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-xl hover:shadow-sm transition-shadow items-start sm:items-center bg-surface-mist">
              
              {/* Order Controls */}
              <div className="flex sm:flex-col gap-2">
                <button 
                  onClick={() => moveItem(index, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-500 hover:text-primary disabled:opacity-30 disabled:hover:text-gray-500"
                  title="위로 이동"
                >
                  <span className="material-symbols-outlined">arrow_upward</span>
                </button>
                <button 
                  onClick={() => moveItem(index, 'down')}
                  disabled={index === items.length - 1}
                  className="p-1 text-gray-500 hover:text-primary disabled:opacity-30 disabled:hover:text-gray-500"
                  title="아래로 이동"
                >
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
              </div>

              {/* Thumbnail */}
              <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-200 relative">
                {item.type === 'photo' && (
                  <img src={getImageUrl(item.url)} alt={item.title} className="w-full h-full object-cover" />
                )}
                {item.type === 'youtube' && (
                  <>
                    <img src={`https://img.youtube.com/vi/${getYouTubeId(item.url)}/hqdefault.jpg`} alt="YouTube" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="material-symbols-outlined text-white opacity-80">play_circle</span>
                    </div>
                  </>
                )}
              </div>

              {/* Info / Edit Form */}
              <div className="flex-1 w-full min-w-0">
                {editingItem === item.id ? (
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      value={editForm.title} 
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                      placeholder="제목"
                      className="w-full p-2 text-sm border rounded-md"
                    />
                    <textarea 
                      value={editForm.description} 
                      onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                      placeholder="설명"
                      className="w-full p-2 text-sm border rounded-md resize-none"
                      rows="2"
                    />
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded uppercase font-bold">{item.type}</span>
                      <h5 className="font-bold text-gray-900 truncate">{item.title || '(제목 없음)'}</h5>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{item.description || '(설명 없음)'}</p>
                    <p className="text-xs text-gray-400 truncate">{item.url}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-2 shrink-0 self-end sm:self-center w-full sm:w-auto mt-4 sm:mt-0">
                {editingItem === item.id ? (
                  <>
                    <button 
                      onClick={() => handleSaveEdit(item.id)}
                      disabled={savingEdit}
                      className="flex-1 sm:flex-none px-3 py-1.5 bg-primary text-white text-sm rounded hover:bg-primary-fixed"
                    >
                      {savingEdit ? '저장 중...' : '저장'}
                    </button>
                    <button 
                      onClick={cancelEditing}
                      disabled={savingEdit}
                      className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300"
                    >
                      취소
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => startEditing(item)}
                      className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 flex justify-center items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">edit</span> 수정
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 sm:flex-none px-3 py-1.5 bg-red-50 text-red-600 text-sm rounded hover:bg-red-100 flex justify-center items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span> 삭제
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryAdminMgmt;
