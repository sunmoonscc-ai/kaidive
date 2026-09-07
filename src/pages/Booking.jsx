import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-24 md:pt-32 pb-section-gap-mobile md:pb-section-gap-desktop px-gutter max-w-container-max mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-ocean mb-4">{t('booking.title')}</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">{t('booking.desc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 glass-panel rounded-xl p-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvHVa9TKTG_EKljoooFS11w7RAcL32piFKZD9rdYtUFuLsBJG8i9a-y_Dv8COO-FI6zzerf_j4_QaOK0WB6zlaLK-rSamha1wd93sN5JBBqoHxXb2v1MpvQ3Tn2iI1__4bbyY8T0hfh9puxmmJR_xWGDIYw4Yvm8vkIP1u9UYE0hh6pg3myT-wKMhuoEWZmDR8YPjN4suBrXh7k3Rky8UPewctZS-ku8tTjSsozPnHAXurHltcFBij')" }}
          ></div>
          <form className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.firstName')}</label>
                <input type="text" className="w-full form-input-line font-body-md text-on-surface" placeholder="John" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.lastName')}</label>
                <input type="text" className="w-full form-input-line font-body-md text-on-surface" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.email')}</label>
              <input type="email" className="w-full form-input-line font-body-md text-on-surface" placeholder="john@example.com" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.selectDate')}</label>
                <input type="date" className="w-full form-input-line font-body-md text-on-surface" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.divingProgram')}</label>
                <select className="w-full form-input-line font-body-md text-on-surface bg-transparent" defaultValue="">
                  <option value="" disabled>{t('booking.selectExperience')}</option>
                  <option value="discover">{t('booking.discover')}</option>
                  <option value="openwater">{t('booking.openwater')}</option>
                  <option value="advanced">{t('booking.advanced')}</option>
                  <option value="fun">{t('booking.fun')}</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.prefLang')}</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="language" className="text-primary-container focus:ring-primary-container" defaultChecked />
                  <span className="font-body-md">{t('booking.en')}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="language" className="text-primary-container focus:ring-primary-container" />
                  <span className="font-body-md">{t('booking.ko')}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="language" className="text-primary-container focus:ring-primary-container" />
                  <span className="font-body-md">{t('booking.ja')}</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.specialReq')}</label>
              <textarea className="w-full form-input-line font-body-md text-on-surface resize-none" rows="3" placeholder={t('booking.specialReqPlaceholder')}></textarea>
            </div>
            <button type="button" className="bg-[#FF7F50] text-white px-8 py-4 rounded-lg font-label-sm text-label-sm uppercase hover:saturate-150 transition-all active:scale-95 inline-flex items-center gap-2">
              {t('booking.submit')}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-xl p-6 border-t-4 border-t-primary-container">
            <h3 className="font-headline-md text-headline-md text-deep-ocean mb-2">{t('booking.instant')}</h3>
            <p className="font-body-md text-on-surface-variant mb-6">{t('booking.instantDesc')}</p>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center justify-between p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#FEE500]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  <span className="font-body-md font-semibold text-on-surface">KakaoTalk</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">open_in_new</span>
              </a>
              <a href="#" className="flex items-center justify-between p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#25D366]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <span className="font-body-md font-semibold text-on-surface">WhatsApp</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">open_in_new</span>
              </a>
              <a href="#" className="flex items-center justify-between p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00B900]" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                  <span className="font-body-md font-semibold text-on-surface">Line</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="glass-panel rounded-xl p-6">
            <h4 className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-4">{t('booking.location')}</h4>
            <div className="h-48 rounded-lg overflow-hidden relative mb-4">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpU5YVFZt1PvKC7RmlnN6bdzGfgF5BvkQNL-Ge0mv1Eh5fcSuOXNp13gmfN0X7bjZqKIUjyZG1dB47g7m7a-VVwoHx-b73iafQZAKXozLMRy0un8IWruh2xLBQXb82qvFyH3k0xWe9OIZNonBABlSoIMTA9wcBdsEVdBuwSLWFqwylos7j2Vx0Tm9tJVzUOQLr5k5guH9OrtdmbZbmFzFvWtWDaYVHNIQXw0QqdrbXZ6pnC5vLlxYl')" }}
              ></div>
            </div>
            <p className="font-body-md text-on-surface">
              Mactan Island<br/>Cebu, Philippines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
