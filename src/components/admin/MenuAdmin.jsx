import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyahBAIUi-KoIa2BnemQCp3KLSF9VjIwa1fNyawPScaFMwmZqvJ5_9H5nMTSos9ZaOmBQ/exec';

const MenuAdmin = () => {
  const { t } = useTranslation();
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMenu, setNewMenu] = useState({ key: '', path: '', order: 0, en: '', ko: '', ja: '', 'zh-CN': '', 'zh-TW': '' });
  const [editingId, setEditingId] = useState(null);

  const fetchMenus = async () => {
    setLoading(true);
    try {
      const res = await fetch(SCRIPT_URL);
      const data = await res.json();
      data.sort((a, b) => a.order - b.order);
      setMenus(data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleAddOrUpdate = async () => {
    if (!newMenu.ko) return alert("Korean Label is required.");
    setLoading(true);
    let menuToSave = { ...newMenu };

    try {
      // Auto translate if KO is provided but EN is missing
      if (menuToSave.ko && (!menuToSave.en || !menuToSave.ja || !menuToSave['zh-CN'] || !menuToSave['zh-TW'])) {
        const translate = async (targetLang) => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(menuToSave.ko)}&langpair=ko|${targetLang}`, {
              signal: controller.signal
            });
            clearTimeout(timeoutId);
            const data = await res.json();
            return data.responseData?.translatedText || '';
          } catch (e) {
            console.error("Translation error:", e);
            return '';
          }
        };

        const [en, ja, zhCN, zhTW] = await Promise.all([
          menuToSave.en ? Promise.resolve(menuToSave.en) : translate('en'),
          menuToSave.ja ? Promise.resolve(menuToSave.ja) : translate('ja'),
          menuToSave['zh-CN'] ? Promise.resolve(menuToSave['zh-CN']) : translate('zh-CN'),
          menuToSave['zh-TW'] ? Promise.resolve(menuToSave['zh-TW']) : translate('zh-TW')
        ]);

        menuToSave.en = en;
        menuToSave.ja = ja;
        menuToSave['zh-CN'] = zhCN;
        menuToSave['zh-TW'] = zhTW;
      }

      // Auto generate key and path if empty
      if (!menuToSave.key && menuToSave.en) {
        menuToSave.key = menuToSave.en.toLowerCase().replace(/[^a-z0-9]/g, '');
      }
      if (!menuToSave.key) {
        menuToSave.key = `menu_${Date.now()}`;
      }
      if (!menuToSave.path) {
        menuToSave.path = `/${menuToSave.key}`;
      }

      if (!editingId && !menuToSave.order) {
        menuToSave.order = menus.length + 1;
      }

      if (editingId) {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify({ action: 'update', ...menuToSave, id: editingId }),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }
        });
        setEditingId(null);
      } else {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify({ action: 'add', ...menuToSave }),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }
        });
      }
      setNewMenu({ key: '', path: '', order: 0, en: '', ko: '', ja: '', 'zh-CN': '', 'zh-TW': '' });
      await fetchMenus();
    } catch (error) {
      console.error("Error saving menu:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this menu item?")) {
      setLoading(true);
      try {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify({ action: 'delete', id }),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }
        });
        await fetchMenus();
      } catch (error) {
        console.error("Error deleting menu:", error);
      }
      setLoading(false);
    }
  };

  const handleEdit = (menu) => {
    setNewMenu(menu);
    setEditingId(menu.id);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-deep-ocean">{t('admin.menuMgmt')}</h3>
      <p className="text-on-surface-variant mb-6">{t('admin.menuDesc')}</p>
      
      <div className="bg-surface-mist p-4 rounded-xl border border-white/10 mb-6">
        <h4 className="font-semibold mb-3">{editingId ? t('admin.editMenu') : t('admin.addNewMenu')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          <input type="text" placeholder={t('admin.koLabel')} value={newMenu.ko} onChange={e => setNewMenu({...newMenu, ko: e.target.value})} className="px-3 py-2 rounded-lg border outline-none text-black font-medium" />
          <input type="text" placeholder={t('admin.enLabel')} value={newMenu.en} onChange={e => setNewMenu({...newMenu, en: e.target.value})} className="px-3 py-2 rounded-lg border outline-none text-black" />
          <input type="text" placeholder={t('admin.jaLabel')} value={newMenu.ja} onChange={e => setNewMenu({...newMenu, ja: e.target.value})} className="px-3 py-2 rounded-lg border outline-none text-black" />
          <input type="text" placeholder={t('admin.cnLabel')} value={newMenu['zh-CN']} onChange={e => setNewMenu({...newMenu, 'zh-CN': e.target.value})} className="px-3 py-2 rounded-lg border outline-none text-black" />
          <input type="text" placeholder={t('admin.twLabel')} value={newMenu['zh-TW']} onChange={e => setNewMenu({...newMenu, 'zh-TW': e.target.value})} className="px-3 py-2 rounded-lg border outline-none text-black" />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleAddOrUpdate} 
            disabled={loading}
            className={`bg-primary text-on-primary px-4 py-2 rounded-lg font-semibold transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
          >
            {loading ? t('admin.loading') : (editingId ? t('admin.updateBtn') : t('admin.addBtn'))}
          </button>
          {editingId && !loading && (
            <button onClick={() => { setEditingId(null); setNewMenu({ key: '', path: '', order: 0, en: '', ko: '', ja: '', 'zh-CN': '', 'zh-TW': '' }); }} className="bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-lg font-semibold border hover:bg-surface-container">
              {t('admin.cancel')}
            </button>
          )}

          {loading && (
            <button onClick={() => setLoading(false)} className="bg-error text-white px-4 py-2 rounded-lg font-semibold ml-2 text-sm">
              로딩 취소
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b">
              <th className="p-3 font-semibold text-sm">KO</th>
              <th className="p-3 font-semibold text-sm">EN</th>
              <th className="p-3 font-semibold text-sm">JA</th>
              <th className="p-3 font-semibold text-sm">CN</th>
              <th className="p-3 font-semibold text-sm">TW</th>
              <th className="p-3 font-semibold text-sm">{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6" className="p-3 text-center">{t('admin.loading')}</td></tr>
            ) : menus.length === 0 ? (
              <tr><td colSpan="6" className="p-3 text-center">{t('admin.noItems')}</td></tr>
            ) : (
              menus.map((menu) => (
                <tr key={menu.id} className="border-b hover:bg-surface-mist transition-colors">
                  <td className="p-3 font-medium text-primary">{menu.ko}</td>
                  <td className="p-3 text-sm">{menu.en}</td>
                  <td className="p-3 text-sm">{menu.ja}</td>
                  <td className="p-3 text-sm">{menu['zh-CN']}</td>
                  <td className="p-3 text-sm">{menu['zh-TW']}</td>
                  <td className="p-3 flex gap-2">
                    <button onClick={() => handleEdit(menu)} className="text-primary hover:underline text-sm font-medium">{t('admin.edit')}</button>
                    <button onClick={() => handleDelete(menu.id)} className="text-error hover:underline text-sm font-medium">{t('admin.delete')}</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuAdmin;
