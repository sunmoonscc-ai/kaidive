import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const I18nAdmin = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-deep-ocean">{t('admin.i18nTitle')}</h3>
      <p className="text-on-surface-variant mb-6">{t('admin.i18nDesc')}</p>

      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none bg-surface">
          <option value="en">English (EN)</option>
          <option value="ko">한국어 (KO)</option>
          <option value="ja">日本語 (JA)</option>
          <option value="zh-CN">简体中文 (CN)</option>
          <option value="zh-TW">繁體中文 (TW)</option>
        </select>
        <button className="bg-surface-container-low text-primary px-4 py-2 rounded-lg font-semibold hover:bg-surface-container border">{t('admin.filterByKey')}</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b">
              <th className="p-3 font-semibold text-sm w-1/3">{t('admin.transKey')}</th>
              <th className="p-3 font-semibold text-sm w-1/2">{t('admin.valueTarget')}</th>
              <th className="p-3 font-semibold text-sm">{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-surface-mist transition-colors">
              <td className="p-3 text-sm text-on-surface-variant font-mono">hero.title</td>
              <td className="p-3">
                <input type="text" defaultValue="Discover the Deep Blue" className="w-full px-2 py-1 border rounded" />
              </td>
              <td className="p-3">
                <button className="bg-primary text-on-primary px-3 py-1 rounded text-sm hover:opacity-90">{t('admin.save')}</button>
              </td>
            </tr>
            <tr className="border-b hover:bg-surface-mist transition-colors">
              <td className="p-3 text-sm text-on-surface-variant font-mono">hero.subtitle</td>
              <td className="p-3">
                <textarea defaultValue="Join us for an unforgettable diving experience." className="w-full px-2 py-1 border rounded min-h-[60px]" />
              </td>
              <td className="p-3">
                <button className="bg-primary text-on-primary px-3 py-1 rounded text-sm hover:opacity-90">{t('admin.save')}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default I18nAdmin;
