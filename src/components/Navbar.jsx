import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { db, auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { isAdmin } from '../config/roles';

const Navbar = ({ user, setUser }) => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isMenuActive = (menu) => {
    const path = location.pathname;
    if (menu.key === 'kaidive') {
      return path === '/' || path === '/home' || path.startsWith('/kaidive');
    }
    if (menu.key === 'programs') {
      return path.startsWith('/programs');
    }
    if (menu.key === 'freediving') {
      return path.startsWith('/freediving');
    }
    if (menu.key === 'oslob') {
      return path.startsWith('/oslob');
    }
    if (menu.key === 'hopping') {
      return path.startsWith('/hopping');
    }
    if (menu.key === 'gallery') {
      return path.startsWith('/gallery');
    }
    if (menu.key === 'booking') {
      return path.startsWith('/booking');
    }
    return path === menu.path;
  };

  const [menus, setMenus] = useState([
    { 
      key: 'kaidive', path: '/kaidive/discover', en: 'Scuba Diving', ko: '스쿠버 다이빙', ja: 'スキューバダイビング', 'zh-CN': '水肺潜水', 'zh-TW': '水肺潛水',
      submenus: [
        { key: 'discover', path: '/kaidive/discover', ko: '체험다이빙', en: 'Discover Scuba', ja: '体験ダイビング', 'zh-CN': '体验潜水', 'zh-TW': '體驗潛水' },
        { key: 'openwater', path: '/kaidive/openwater', ko: '오픈워터', en: 'Open Water', ja: 'オープンウォーター', 'zh-CN': '开放水域', 'zh-TW': '開放水域' },
        { key: 'advanced', path: '/kaidive/advanced', ko: '어드밴스', en: 'Advanced', ja: 'アドバンス', 'zh-CN': '进阶潜水', 'zh-TW': '進階潛水' },
        { key: 'rescue-master', path: '/kaidive/rescue-master', ko: '레스큐&마스터', en: 'Rescue & Master', ja: 'レスキュー＆マスター', 'zh-CN': '救援&潜水长', 'zh-TW': '救援&潛水長' },
        { key: 'specialty', path: '/kaidive/specialty', ko: '스페셜티', en: 'Specialty', ja: 'スペシャルティ', 'zh-CN': '专长课程', 'zh-TW': '專長課程' },
        { key: 'fun', path: '/kaidive/fun', ko: '펀다이빙', en: 'Fun Diving', ja: 'ファンダイビング', 'zh-CN': '欢乐潜水', 'zh-TW': '歡樂潛水' },
        { key: 'package', path: '/kaidive/package', ko: '다이빙패키지', en: 'Diving Package', ja: 'ダイビングパッケージ', 'zh-CN': '潜水套餐', 'zh-TW': '潛水套裝' }
      ]
    },
    { 
      key: 'programs', path: '/programs/instructor', en: 'Pro Diving', ko: '프로 다이빙', ja: 'プロダイビング', 'zh-CN': '专业潜水', 'zh-TW': '專業潛水',
      submenus: [
        { key: 'instructor', path: '/programs/instructor', ko: '강사', en: 'Instructor', ja: 'インストラクター', 'zh-CN': '教练课程', 'zh-TW': '教練課程' },
        { key: 'assistant', path: '/programs/assistant', ko: '보조강사', en: 'Assistant Instructor', ja: 'アシスタント', 'zh-CN': '助理教练', 'zh-TW': '助理教練' },
        { key: 'specialty-instructor', path: '/programs/specialty-instructor', ko: '스페셜티강사', en: 'Specialty Instructor', ja: 'スペシャルティインストラクター', 'zh-CN': '专长教练', 'zh-TW': '專長教練' }
      ]
    },
    { 
      key: 'hopping', path: '/hopping/tour', en: 'Hopping & Activity', ko: '호핑&액티비티', ja: 'ホッピング＆アクティビティ', 'zh-CN': '跳岛&活动', 'zh-TW': '跳島&活動',
      submenus: [
        { key: 'tour', path: '/hopping/tour', ko: '호핑투어', en: 'Hopping Tour', ja: 'アイランドホッピング', 'zh-CN': '跳岛一日游', 'zh-TW': '跳島一日遊' },
        { key: 'marine', path: '/hopping/marine', ko: '해양레포츠', en: 'Marine Sports', ja: 'マリンスポーツ', 'zh-CN': '水上运动', 'zh-TW': '水上活動' },
        { key: 'amazing', path: '/hopping/amazing', ko: '세부 어메이징쇼', en: 'Cebu Amazing Show', ja: 'セブ・アメージングショー', 'zh-CN': '宿务奇幻秀', 'zh-TW': '宿霧奇幻秀' }
      ]
    },
    { 
      key: 'freediving', path: '/freediving/freediver', en: 'Freediving', ko: '프리다이빙', ja: 'フリーダイビング', 'zh-CN': '自由潜水', 'zh-TW': '自由潛水',
      submenus: [
        { key: 'freediver', path: '/freediving/freediver', ko: '프리다이버', en: 'Free Diver', ja: 'フリーダイバー', 'zh-CN': '自由潜水员', 'zh-TW': '自由潛水員' }
      ]
    },
    { 
      key: 'oslob', path: '/oslob/moalboal', en: 'Oslob Tour', ko: '오슬롭투어', ja: 'オスロブツアー', 'zh-CN': '奥斯洛布之旅', 'zh-TW': '奧斯洛布之旅',
      submenus: [
        { key: 'moalboal', path: '/oslob/moalboal', ko: '오슬롭&모알보알', en: 'Oslob & Moalboal', ja: 'オスロブ＆モアルボアル', 'zh-CN': '奥斯洛布&墨宝', 'zh-TW': '奧斯洛布&墨寶' },
        { key: 'sumilon', path: '/oslob/sumilon', ko: '오슬롭&수밀론', en: 'Oslob & Sumilon', ja: 'オスロブ＆スミロン', 'zh-CN': '奥斯洛布&苏米龙', 'zh-TW': '奧斯洛布&蘇米龍' },
        { key: 'canyoneering', path: '/oslob/canyoneering', ko: '오슬롭&캐녀닝', en: 'Oslob & Canyoneering', ja: 'オスロブ＆キャニ奥ニアリング', 'zh-CN': '奥斯洛布&溯溪', 'zh-TW': '奧斯洛布&溯溪' }
      ]
    },
    { key: 'booking', path: '/booking', en: 'Consultation', ko: '상담', ja: '予約', 'zh-CN': '预订', 'zh-TW': '預訂' },
    { key: 'gallery', path: '/gallery', en: 'Gallery', ko: '갤러리', ja: 'ギャラリー', 'zh-CN': '图库', 'zh-TW': '圖庫' }
  ]);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const langRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    setActiveMobileMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
        setIsProfileOpen(false);
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
    if (!code) return 'KO';
    if (code.startsWith('ko')) return 'KO';
    if (code.startsWith('ja')) return 'JA';
    if (code === 'zh-CN') return 'CN';
    if (code === 'zh-TW') return 'TW';
    if (code.startsWith('zh')) return 'CN';
    return 'EN';
  };

  const getMenuLabel = (item) => {
    if (!item) return '';
    const currentLang = i18n.resolvedLanguage || i18n.language || 'ko';
    
    // Exact match for zh-CN or zh-TW
    if (currentLang === 'zh-TW' && item['zh-TW']) return item['zh-TW'];
    if (currentLang === 'zh-CN' && item['zh-CN']) return item['zh-CN'];
    
    // Match 2-letter code: ko, en, ja
    const langPrefix = currentLang.split('-')[0];
    if (item[langPrefix]) return item[langPrefix];
    
    // Fallback order: en -> ko -> t(navbar.key)
    return item.en || item.ko || (item.key ? t(`navbar.${item.key}`) : '');
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
        <div className="flex items-center gap-2 md:gap-4 min-w-0 pr-2">
          <NavLink to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity min-w-0">
            <img 
              src="/logo-top.png" 
              alt="KAI DIVE Logo" 
              className="h-14 md:h-20 w-auto object-contain py-1 md:py-2 flex-shrink-0"
            />
            <span className="font-display font-bold text-base sm:text-xl md:text-2xl text-orange-600 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] whitespace-nowrap truncate">
              KAI DIVE CENTER
            </span>
          </NavLink>
        </div>
        <nav className="hidden md:flex gap-3 lg:gap-6 items-center">
          {menus.map((menu) => (
            <div key={menu.key} className="relative group h-full flex items-center">
              <NavLink 
                to={menu.path} 
                className={() => `font-body-md text-body-md hover:opacity-80 transition-opacity flex items-center gap-1 ${
                  isMenuActive(menu) ? 'text-primary font-semibold border-b-2 border-primary' : 'text-on-surface-variant font-medium'
                }`}
              >
                {getMenuLabel(menu)}
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
                        {getMenuLabel(sub)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {user && isAdmin(user.email) && (
            <NavLink to="/admin" className={({ isActive }) => `font-body-md text-body-md hover:opacity-80 transition-opacity ${
              isActive ? 'text-error font-semibold border-b-2 border-error' : 'text-error font-medium'
            }`}>
              Admin
            </NavLink>
          )}
        </nav>
        <div className="flex items-center gap-2 md:gap-4 relative flex-shrink-0" ref={langRef}>
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md hover:scale-105 transition-transform"
              >
                {user.picture ? (
                  <img src={user.picture} alt="Profile" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  user.name ? user.name.charAt(0).toUpperCase() : 'U'
                )}
              </button>

              {isProfileOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-[180px] flex flex-col z-50 border border-gray-100 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-500 mb-1 truncate">
                    {user.email}
                  </div>
                  <NavLink 
                    to="/mypage" 
                    onClick={() => setIsProfileOpen(false)}
                    className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left w-full flex items-center gap-3 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">person</span> {t('navbar.myPage')}
                  </NavLink>
                  {isAdmin(user.email) && (
                    <NavLink 
                      to="/admin" 
                      onClick={() => setIsProfileOpen(false)}
                      className="md:hidden px-4 py-2.5 text-sm text-error font-medium hover:bg-red-50 text-left w-full flex items-center gap-3 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span> {t('navbar.adminMenu')}
                    </NavLink>
                  )}
                  <div className="border-t border-gray-100 my-1"></div>
                  <button 
                    onClick={() => {
                      setIsProfileOpen(false);
                      handleLogout();
                    }} 
                    className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left w-full flex items-center gap-3 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span> {t('navbar.logout')}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="bg-primary text-on-primary font-semibold text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-xl shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap min-w-max flex items-center justify-center flex-shrink-0"
            >
              {t('navbar.login')}
            </button>
          )}

          <div 
            onClick={() => {
              setIsLangOpen(!isLangOpen);
              setIsProfileOpen(false);
            }}
            className="rounded-xl px-2.5 md:px-4 py-1.5 md:py-2 flex gap-1.5 md:gap-2 items-center font-label-sm text-label-sm cursor-pointer shadow-sm transition-colors bg-surface-container-low text-on-surface hover:bg-surface-container flex-shrink-0 whitespace-nowrap"
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
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-mist backdrop-blur-md shadow-[0_-10px_30px_rgba(0,174,239,0.08)] grid grid-cols-4 gap-y-1 h-auto min-h-[5rem] px-2 py-2 pb-safe border-t-0">
        {menus.map((menu) => {
          const hasSubmenu = menu.submenus && menu.submenus.length > 0;
          // An item is active ONLY if its submenu modal is open OR it matches current route while no submenu modal is open
          const isItemActive = activeMobileMenu ? activeMobileMenu === menu.key : isMenuActive(menu);

          const content = (
            <>
              <span 
                className="material-symbols-outlined mb-0.5 text-2xl transition-all" 
                style={{ fontVariationSettings: isItemActive ? "'FILL' 1, 'wght' 600" : "'FILL' 0, 'wght' 400" }}
              >
                {menu.key === 'kaidive' ? 'home' : 
                 menu.key === 'programs' ? 'scuba_diving' : 
                 menu.key === 'hopping' ? 'sailing' :
                 menu.key === 'freediving' ? 'pool' :
                 menu.key === 'oslob' ? 'directions_boat' :
                 menu.key === 'booking' ? 'calendar_add_on' : 'photo_library'}
              </span>
              <span className="font-label-sm text-label-sm leading-tight text-[10px] whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                {getMenuLabel(menu)}
              </span>
            </>
          );

          const itemClass = `flex flex-col items-center justify-center transition-colors active:scale-90 transition-transform p-1.5 rounded-xl w-full select-none ${
            isItemActive 
              ? 'bg-primary-container text-on-primary-container font-bold rounded-2xl shadow-sm' 
              : 'text-on-surface-variant hover:bg-surface-container-low font-medium'
          }`;

          return (
            <div key={menu.key} className="flex justify-center">
              {hasSubmenu ? (
                <button
                  type="button"
                  onClick={() => setActiveMobileMenu(activeMobileMenu === menu.key ? null : menu.key)}
                  className={itemClass}
                >
                  {content}
                </button>
              ) : (
                <NavLink
                  to={menu.path}
                  onClick={() => setActiveMobileMenu(null)}
                  className={itemClass}
                >
                  {content}
                </NavLink>
              )}
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
                <span className="text-body-lg">{getMenuLabel(sub)}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
