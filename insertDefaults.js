import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const defaults = [
  { key: 'home', path: '/', order: 1, en: 'Home', ko: '홈', ja: 'ホーム', 'zh-CN': '首页', 'zh-TW': '首頁' },
  { key: 'programs', path: '/programs', order: 2, en: 'Programs', ko: '프로그램', ja: 'プログラム', 'zh-CN': '项目', 'zh-TW': '項目' },
  { key: 'booking', path: '/booking', order: 3, en: 'Booking', ko: '예약', ja: '予約', 'zh-CN': '预订', 'zh-TW': '預訂' },
  { key: 'gallery', path: '/gallery', order: 4, en: 'Gallery', ko: '갤러리', ja: 'ギャラリー', 'zh-CN': '图库', 'zh-TW': '图库' }
];

async function insertDefaults() {
  for (const m of defaults) {
    await addDoc(collection(db, 'menus'), m);
    console.log("Inserted:", m.key);
  }
  process.exit(0);
}

insertDefaults();
