import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { db, auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const ADMIN_EMAILS = ['hdcc6th@gmail.com', 'sunmoon.scc@gmail.com'];

const Navbar = ({ user, setUser }) => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menus, setMenus] = useState([
    { key: 'kaidive', path: '/kaidive', en: 'KAI Dive', ko: '카이 다이브', ja: 'カイダイブ', 'zh-CN': 'Kai Dive', 'zh-TW': 'Kai Dive' },
    { key: 'programs', path: '/programs', en: 'Programs', ko: '프로그램', ja: 'プログラム', 'zh-CN': '项目', 'zh-TW': '項目' },
    { key: 'booking', path: '/booking', en: 'Booking', ko: '예약', ja: '予約', 'zh-CN': '预订', 'zh-TW': '預訂' },
    { key: 'gallery', path: '/gallery', en: 'Gallery', ko: '갤러리', ja: 'ギャラリー', 'zh-CN': '图库', 'zh-TW': '圖庫' }
  ]);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch menus from Google Sheets
    const fetchMenus = async () => {
      try {
        const res = await fetch('https://script.google.com/macros/s/AKfycbyahBAIUi-KoIa2BnemQCp3KLSF9VjIwa1fNyawPScaFMwmZqvJ5_9H5nMTSos9ZaOmBQ/exec');
        const data = await res.json();
        if (data && data.length > 0) {
          data.sort((a, b) => a.order - b.order);
          setMenus(data);
        }
      } catch (e) {
        console.error("Failed to fetch menus", e);
      }
    };
    fetchMenus();
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const getLangLabel = (code) => {
    if (code.startsWith('ko')) return 'KO';
    if (code.startsWith('ja')) return 'JA';
    if (code === 'zh-CN') return 'CN';
    if (code === 'zh-TW') return 'TW';
    return 'EN';
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser({
        name: result.user.displayName,
        email: result.user.email,
        picture: result.user.photoURL,
      });
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };
  return (
    <>
      {/* TopAppBar (Desktop) */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:flex justify-between items-center px-gutter h-20 ${
          isScrolled ? 'shadow-[0_10px_30px_rgba(0,174,239,0.08)] border-b border-white/10' : 'bg-transparent border-transparent'
        }`}
        style={{ background: isScrolled ? 'linear-gradient(to right, rgb(26, 57, 116) 0%, rgb(20, 38, 70) 250px, rgb(20, 38, 70) 100%)' : 'transparent' }}
      >
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="KAI DIVE Logo" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </NavLink>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {menus.map((menu) => (
            <NavLink 
              key={menu.key} 
              to={menu.path} 
              className={({ isActive }) => `font-body-md text-body-md hover:opacity-80 transition-opacity ${isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-white/80'}`}
            >
              {menu[i18n.resolvedLanguage?.split('-')[0]] || menu.en || t(`navbar.${menu.key}`)}
            </NavLink>
          ))}
          {user && ADMIN_EMAILS.includes(user.email) && (
            <NavLink to="/admin" className={({ isActive }) => `font-body-md text-body-md hover:opacity-80 transition-opacity ${isActive ? 'text-error font-semibold border-b-2 border-error' : 'text-error'}`}>
              Admin
            </NavLink>
          )}
        </nav>
        <div className="flex items-center gap-4 relative" ref={langRef}>
          {user ? (
            <div className="flex items-center gap-3 bg-surface-container-low rounded-xl px-3 py-1.5 shadow-sm">
              <img src={user.picture} alt={user.name} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
              <span className="text-on-surface text-sm font-medium max-w-[80px] truncate">{user.name}</span>
              <button onClick={handleLogout} className="text-error hover:opacity-80 text-sm font-semibold transition-opacity ml-1">
                {t('navbar.logout')}
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="bg-primary text-on-primary font-semibold text-sm px-4 py-2 rounded-xl shadow-sm hover:opacity-90 transition-opacity"
            >
              {t('navbar.login')}
            </button>
          )}

          <div 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 flex gap-2 items-center text-white font-label-sm text-label-sm cursor-pointer shadow-sm hover:bg-white/20 transition-colors"
          >
            <span>{getLangLabel(i18n.resolvedLanguage || i18n.language || 'en')}</span>
            <span className="material-symbols-outlined text-sm">language</span>
          </div>
          {isLangOpen && (
            <div className="absolute top-full mt-2 right-0 bg-surface-mist backdrop-blur-md border border-white/10 rounded-xl shadow-lg flex flex-col py-2 min-w-[120px]">
              <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-left text-sm hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary">English (EN)</button>
              <button onClick={() => changeLanguage('ko')} className="px-4 py-2 text-left text-sm hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary">한국어 (KO)</button>
              <button onClick={() => changeLanguage('ja')} className="px-4 py-2 text-left text-sm hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary">日本語 (JA)</button>
              <button onClick={() => changeLanguage('zh-CN')} className="px-4 py-2 text-left text-sm hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary">简体中文 (CN)</button>
              <button onClick={() => changeLanguage('zh-TW')} className="px-4 py-2 text-left text-sm hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary">繁體中文 (TW)</button>
            </div>
          )}
        </div>
      </header>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-mist backdrop-blur-md shadow-[0_-10px_30px_rgba(0,174,239,0.08)] flex justify-around items-center h-20 px-4 pb-safe border-t-0">
        {menus.slice(0, 4).map((menu) => (
          <NavLink key={menu.key} to={menu.path} className={({ isActive }) => `flex flex-col items-center justify-center transition-colors active:scale-90 transition-transform p-2 rounded-xl ${isActive ? 'bg-primary-container text-on-primary-container rounded-full px-4 py-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{menu.key === 'home' ? 'home' : menu.key === 'programs' ? 'scuba_diving' : menu.key === 'booking' ? 'calendar_add_on' : 'photo_library'}</span>
                <span className="font-label-sm text-label-sm leading-tight text-[10px]">
                  {menu[i18n.resolvedLanguage?.split('-')[0]] || menu.en || t(`navbar.${menu.key}`)}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
