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
    { 
      key: 'kaidive', path: '/', en: 'Scuba Diving', ko: '스쿠버 다이빙', ja: 'スキューバダイビング', 'zh-CN': '水肺潜水', 'zh-TW': '水肺潛水',
      submenus: [
        { key: 'discover', path: '/kaidive/discover', ko: '체험다이빙', en: 'Discover Scuba Diving' },
        { key: 'openwater', path: '/kaidive/openwater', ko: '오픈워터', en: 'Open Water' },
        { key: 'advanced', path: '/kaidive/advanced', ko: '어드밴스', en: 'Advanced' },
        { key: 'rescue-master', path: '/kaidive/rescue-master', ko: '레스큐&마스터', en: 'Rescue & Master' },
        { key: 'specialty', path: '/kaidive/specialty', ko: '스페셜티', en: 'Specialty' },
        { key: 'fun', path: '/kaidive/fun', ko: '펀다이빙', en: 'Fun Diving' },
        { key: 'package', path: '/kaidive/package', ko: '다이빙패키지', en: 'Diving Package' }
      ]
    },
    { 
      key: 'programs', path: '/programs', en: 'Pro Diving', ko: '프로 다이빙', ja: 'プロダイビング', 'zh-CN': '专业潜水', 'zh-TW': '專業潛水',
      submenus: [
        { key: 'instructor', path: '/programs/instructor', ko: '강사' },
        { key: 'assistant', path: '/programs/assistant', ko: '보조강사' },
        { key: 'specialty', path: '/programs/specialty', ko: '스페셜티강사' }
      ]
    },
    { key: 'booking', path: '/booking', en: 'Booking', ko: '예약', ja: '予約', 'zh-CN': '预订', 'zh-TW': '預訂' },
    { key: 'gallery', path: '/gallery', en: 'Gallery', ko: '갤러리', ja: 'ギャラリー', 'zh-CN': '图库', 'zh-TW': '圖庫' }
  ]);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
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
          
          // Merge fetched data with local submenus so they don't disappear
          setMenus(prevMenus => {
            return data.map(fetchedMenu => {
              const localMenu = prevMenus.find(m => m.key === fetchedMenu.key);
              return {
                ...fetchedMenu,
                submenus: localMenu?.submenus || null
              };
            });
          });
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
      {/* TopAppBar (Responsive) */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-4 md:px-gutter h-16 md:h-20 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
        style={{ background: 'linear-gradient(to bottom, rgb(0, 85, 164) 0%, rgba(255, 255, 255, 1) 100%)' }}
      >
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo-top.png" 
              alt="KAI DIVE Logo" 
              className="h-16 md:h-20 w-auto object-contain py-2"
            />
            <span className="font-display font-bold text-xl md:text-2xl text-deep-ocean tracking-wide">
              KAI DIVE
            </span>
          </NavLink>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {menus.map((menu) => (
            <div key={menu.key} className="relative group h-full flex items-center">
              <NavLink 
                to={menu.path} 
                className={({ isActive }) => `font-body-md text-body-md hover:opacity-80 transition-opacity flex items-center gap-1 ${
                  isActive ? 'text-primary font-semibold border-b-2 border-primary' : 'text-on-surface-variant font-medium'
                }`}
              >
                {menu[i18n.resolvedLanguage?.split('-')[0]] || menu.en || t(`navbar.${menu.key}`)}
                {menu.submenus && <span className="material-symbols-outlined text-sm">expand_more</span>}
              </NavLink>
              
              {/* Desktop Submenu Dropdown */}
              {menu.submenus && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-surface-mist backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex flex-col py-2 min-w-[160px] overflow-hidden">
                    {menu.submenus.map((sub) => (
                      <NavLink 
                        key={sub.key} 
                        to={sub.path}
                        className={({ isActive }) => `px-4 py-2 text-sm transition-colors text-on-surface-variant hover:text-primary hover:bg-surface-container-low ${isActive ? 'font-semibold text-primary bg-surface-container-low' : ''}`}
                      >
                        {sub[i18n.resolvedLanguage?.split('-')[0]] || sub.en || sub.ko}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {user && ADMIN_EMAILS.includes(user.email) && (
            <NavLink to="/admin" className={({ isActive }) => `font-body-md text-body-md hover:opacity-80 transition-opacity ${
              isActive ? 'text-error font-semibold border-b-2 border-error' : 'text-error font-medium'
            }`}>
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
            className="rounded-xl px-4 py-2 flex gap-2 items-center font-label-sm text-label-sm cursor-pointer shadow-sm transition-colors bg-surface-container-low text-on-surface hover:bg-surface-container"
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
        {menus.slice(0, 4).map((menu) => {
          const hasSubmenu = menu.submenus && menu.submenus.length > 0;
          return (
            <div key={menu.key} className="flex-1 flex justify-center">
              <NavLink 
                to={hasSubmenu ? "#" : menu.path} 
                onClick={(e) => {
                  if (hasSubmenu) {
                    e.preventDefault();
                    setActiveMobileMenu(activeMobileMenu === menu.key ? null : menu.key);
                  }
                }}
                className={({ isActive }) => `flex flex-col items-center justify-center transition-colors active:scale-90 transition-transform p-2 rounded-xl w-full ${(!hasSubmenu && isActive) || activeMobileMenu === menu.key ? 'bg-primary-container text-on-primary-container rounded-full px-4 py-1' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                {({ isActive }) => (
                  <>
                    <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: (!hasSubmenu && isActive) || activeMobileMenu === menu.key ? "'FILL' 1" : "'FILL' 0" }}>{menu.key === 'kaidive' ? 'home' : menu.key === 'programs' ? 'scuba_diving' : menu.key === 'booking' ? 'calendar_add_on' : 'photo_library'}</span>
                    <span className="font-label-sm text-label-sm leading-tight text-[10px]">
                      {menu[i18n.resolvedLanguage?.split('-')[0]] || menu.en || t(`navbar.${menu.key}`)}
                    </span>
                  </>
                )}
              </NavLink>
            </div>
          );
        })}
      </nav>

      {/* Mobile Bottom Sheet for Submenus */}
      {activeMobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveMobileMenu(null)}
          ></div>
          
          {/* Sheet */}
          <div className="relative bg-surface rounded-t-3xl pb-24 pt-6 px-6 shadow-2xl animate-[slideUp_0.3s_ease-out]">
            <div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-6"></div>
            
            {menus.find(m => m.key === activeMobileMenu)?.submenus.map((sub) => (
              <NavLink
                key={sub.key}
                to={sub.path}
                onClick={() => setActiveMobileMenu(null)}
                className={({ isActive }) => `flex items-center p-4 rounded-2xl mb-2 transition-colors ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-on-surface hover:bg-surface-container-low'}`}
              >
                <span className="material-symbols-outlined mr-4 opacity-70">arrow_right</span>
                <span className="text-body-lg">{sub[i18n.resolvedLanguage?.split('-')[0]] || sub.en || sub.ko}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
