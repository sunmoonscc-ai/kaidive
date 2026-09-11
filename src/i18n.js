import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        programs: "Programs",
        booking: "Booking",
        gallery: "Gallery",
        login: "Login",
        logout: "Logout"
      },
      booking: {
        title: "Book Your Escape",
        desc: "Secure your premium diving experience in Cebu. Fill out the details below, or reach out to us directly for personalized assistance.",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        selectDate: "Select Date",
        divingProgram: "Diving Program",
        selectExperience: "Select an experience",
        discover: "Discover Scuba Diving",
        openwater: "PADI Open Water Course",
        advanced: "Advanced Open Water",
        fun: "Fun Dives (Certified Only)",
        prefLang: "Preferred Language",
        en: "English",
        ko: "Korean",
        ja: "Japanese",
        specialReq: "Special Requests / Notes",
        specialReqPlaceholder: "Dietary requirements, equipment sizing, etc.",
        submit: "Submit Request",
        instant: "Instant Consultation",
        instantDesc: "Prefer to chat? Reach out via your favorite messenger for quick answers.",
        location: "Location"
      },
      admin: {
        dashboard: "Admin Dashboard",
        menuMgmt: "Menu Management",
        i18nMgmt: "i18n / Translations",
        bookings: "Bookings",
        gallery: "Gallery",
        menuDesc: "Manage navigation bar items. (Add, Edit, Delete, Reorder)",
        addNewMenu: "Add New Menu Item",
        editMenu: "Edit Menu Item",
        key: "Key",
        path: "Path",
        order: "Order",
        enLabel: "English Label",
        koLabel: "Korean Label",
        jaLabel: "Japanese Label",
        cnLabel: "Chinese (CN) Label",
        twLabel: "Taiwanese (TW) Label",
        addBtn: "Add Menu",
        updateBtn: "Update Menu",
        cancel: "Cancel",
        actions: "Actions",
        edit: "Edit",
        delete: "Delete",
        loading: "Loading...",
        noItems: "No menu items found. Add one above!",
        bookingMgmt: "Booking Management",
        bookingDesc: "View and manage customer reservations.",
        galleryMgmt: "Gallery Management",
        galleryDesc: "Upload and remove photos/videos.",
        i18nTitle: "i18n & Translation Management",
        i18nDesc: "Manage texts and fix typos across the application. All changes are saved to the database and applied instantly.",
        filterByKey: "Filter by Key",
        transKey: "Translation Key",
        valueTarget: "Value (Target Language)",
        save: "Save"
      }
    }
  },
  ko: {
    translation: {
      navbar: {
        home: "홈",
        programs: "프로그램",
        booking: "상담",
        gallery: "갤러리",
        login: "로그인",
        logout: "로그아웃"
      },
      booking: {
        title: "상담하기",
        desc: "세부에서의 프리미엄 다이빙 경험을 상담받아보세요. 아래 세부 정보를 작성하시거나, 빠른 상담을 위해 메신저로 직접 문의해주세요.",
        firstName: "이름 (영문)",
        lastName: "성 (영문)",
        email: "이메일 주소",
        selectDate: "상담 날짜 선택",
        divingProgram: "다이빙 프로그램",
        selectExperience: "프로그램을 선택하세요",
        discover: "체험 다이빙 (Discover Scuba Diving)",
        openwater: "PADI 오픈워터 코스",
        advanced: "어드밴스드 오픈워터",
        fun: "펀 다이빙 (자격증 소지자)",
        prefLang: "선호하는 언어",
        en: "영어",
        ko: "한국어",
        ja: "일본어",
        specialReq: "특별 요청 / 참고 사항",
        specialReqPlaceholder: "식단 요구사항, 장비 사이즈 등",
        submit: "상담 요청",
        instant: "빠른 상담",
        instantDesc: "채팅을 선호하시나요? 편하신 메신저로 문의하시면 빠르게 답변해 드립니다.",
        location: "위치"
      },
      admin: {
        dashboard: "관리자 대시보드",
        menuMgmt: "메뉴 관리",
        i18nMgmt: "다국어 번역 관리",
        bookings: "예약 관리",
        gallery: "갤러리 관리",
        menuDesc: "상단 네비게이션 메뉴를 관리합니다. (추가, 수정, 삭제, 순서 변경)",
        addNewMenu: "새 메뉴 추가",
        editMenu: "메뉴 수정",
        key: "고유키",
        path: "경로",
        order: "순서",
        enLabel: "영어 라벨",
        koLabel: "한국어 라벨",
        jaLabel: "일본어 라벨",
        cnLabel: "중국어(간체) 라벨",
        twLabel: "대만어(번체) 라벨",
        addBtn: "메뉴 추가",
        updateBtn: "메뉴 수정",
        cancel: "취소",
        actions: "관리",
        edit: "수정",
        delete: "삭제",
        loading: "로딩 중...",
        noItems: "등록된 메뉴가 없습니다. 위에서 추가해주세요!",
        bookingMgmt: "예약 관리",
        bookingDesc: "고객 예약을 확인하고 관리합니다.",
        galleryMgmt: "갤러리 관리",
        galleryDesc: "사진/비디오를 업로드하고 삭제합니다.",
        i18nTitle: "다국어 및 번역 관리",
        i18nDesc: "애플리케이션 전체의 텍스트를 관리하고 오타를 수정합니다. 모든 변경사항은 데이터베이스에 저장되며 즉시 적용됩니다.",
        filterByKey: "키워드로 필터링",
        transKey: "번역 키",
        valueTarget: "값 (대상 언어)",
        save: "저장"
      }
    }
  },
  ja: {
    translation: {
      navbar: {
        home: "ホーム",
        programs: "プログラム",
        booking: "予約",
        gallery: "ギャラリー",
        login: "ログイン",
        logout: "ログアウト"
      },
      booking: {
        title: "予約する",
        desc: "セブでのプレミアムダイビング体験をご予約ください。以下の詳細をご記入いただくか、メッセンジャーで直接お問い合わせください。",
        firstName: "名",
        lastName: "姓",
        email: "メールアドレス",
        selectDate: "日付を選択",
        divingProgram: "ダイビングプログラム",
        selectExperience: "プログラムを選択",
        discover: "体験ダイビング",
        openwater: "PADIオープンウォーターコース",
        advanced: "アドバンスド・オープンウォーター",
        fun: "ファンダイビング（ライセンス保持者のみ）",
        prefLang: "希望言語",
        en: "英語",
        ko: "韓国語",
        ja: "日本語",
        specialReq: "特別なリクエスト / 備考",
        specialReqPlaceholder: "食事制限、機材のサイズなど",
        submit: "予約をリクエスト",
        instant: "クイック相談",
        instantDesc: "チャットをご希望ですか？お好きなメッセンジャーでお問い合わせいただければ、すぐにお答えします。",
        location: "場所"
      }
    }
  },
  'zh-CN': {
    translation: {
      navbar: {
        home: "首页",
        programs: "项目",
        booking: "预订",
        gallery: "图库",
        login: "登录",
        logout: "登出"
      },
      booking: {
        title: "预订您的潜水之旅",
        desc: "预订您在宿务的尊贵潜水体验。请填写以下信息，或直接通过即时通讯软件联系我们。",
        firstName: "名字",
        lastName: "姓氏",
        email: "电子邮件地址",
        selectDate: "选择日期",
        divingProgram: "潜水项目",
        selectExperience: "选择体验",
        discover: "体验潜水 (Discover Scuba Diving)",
        openwater: "PADI开放水域潜水员课程",
        advanced: "进阶开放水域",
        fun: "欢乐潜水（仅限持证者）",
        prefLang: "首选语言",
        en: "英语",
        ko: "韩语",
        ja: "日语",
        specialReq: "特殊要求 / 备注",
        specialReqPlaceholder: "饮食要求、装备尺寸等",
        submit: "提交预订请求",
        instant: "即时咨询",
        instantDesc: "喜欢聊天？通过您最喜欢的即时通讯软件联系我们，快速获得解答。",
        location: "位置"
      }
    }
  },
  'zh-TW': {
    translation: {
      navbar: {
        home: "首頁",
        programs: "項目",
        booking: "預訂",
        gallery: "圖庫",
        login: "登入",
        logout: "登出"
      },
      booking: {
        title: "預訂您的潛水之旅",
        desc: "預訂您在宿霧的尊貴潛水體驗。請填寫以下資訊，或直接透過即時通訊軟體聯繫我們。",
        firstName: "名字",
        lastName: "姓氏",
        email: "電子郵件地址",
        selectDate: "選擇日期",
        divingProgram: "潛水項目",
        selectExperience: "選擇體驗",
        discover: "體驗潛水 (Discover Scuba Diving)",
        openwater: "PADI開放水域潛水員課程",
        advanced: "進階開放水域",
        fun: "歡樂潛水（僅限持證者）",
        prefLang: "首選語言",
        en: "英語",
        ko: "韓語",
        ja: "日語",
        specialReq: "特殊要求 / 備註",
        specialReqPlaceholder: "飲食要求、裝備尺寸等",
        submit: "提交預訂請求",
        instant: "即時諮詢",
        instantDesc: "喜歡聊天？透過您最喜歡的即時通訊軟體聯繫我們，快速獲得解答。",
        location: "位置"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
