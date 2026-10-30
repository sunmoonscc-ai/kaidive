import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BOOKING_SCRIPT_URL } from '../config/api';

const programs = [
  '체험다이빙(EXPERIENCE DIVING)',
  '오픈워터(OPEN WATER)',
  '어드밴스(ADVANCE)',
  '레스큐 & 마스터(RESCUE & MASTER)',
  '스페셜티(SPECIALTY)',
  '펀다이빙(FUN DIVING)',
  '다이빙패키지(DIVING PACKAGE)',
  '프리다이버(FREE DIVER)',
  '프로다이빙 [강사]',
  '프로다이빙 [보조강사]',
  '프로다이빙 [스페셜티강사]',
  '잘 모르겠음'
];

const contacts = [
  { name: 'Facebook', id: 'kai sam 720051', icon: 'thumb_up', color: 'text-[#1877F2]', link: 'https://www.facebook.com/kai.sam.720051' },
  { name: 'Instagram', id: 'Kaisam2018', icon: 'photo_camera', color: 'text-[#E1306C]', link: 'https://www.instagram.com/Kaisam2018' },
  { name: 'LINE', id: 'kaidive', icon: 'chat', color: 'text-[#00B900]', link: 'https://line.me/ti/p/17_V1Kct0L' },
  { name: 'KakaoTalk', id: 'mawlove3884', icon: 'forum', color: 'text-[#FEE500]' },
  { name: 'WhatsApp', id: 'chang sic woo(Sam)', icon: 'chat', color: 'text-[#25D366]', link: 'https://api.whatsapp.com/message/6CTKQD3R4N75G1?autoload=1&app_absent=0' }
];

const Booking = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    otherContact: '',
    date: '',
    program: '',
    requests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!BOOKING_SCRIPT_URL) {
      alert(t('booking.alertNoApi'));
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(BOOKING_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (result.status === 'success') {
        alert(t('booking.alertSuccess'));
        setFormData({
          name: '',
          phone: '',
          email: '',
          otherContact: '',
          date: '',
          program: '',
          requests: ''
        });
      } else {
        alert(t('booking.alertError', { message: result.message }));
      }
    } catch (error) {
      alert(t('booking.alertFail', { message: error.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, name) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        alert(t('booking.copiedSuccess', { name, id: text }));
      });
    } else {
      alert(t('booking.copiedFail', { id: text }));
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-section-gap-mobile md:pb-section-gap-desktop px-gutter max-w-container-max mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-ocean mb-4">{t('booking.title')}</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          {t('booking.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 glass-panel rounded-xl p-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvHVa9TKTG_EKljoooFS11w7RAcL32piFKZD9rdYtUFuLsBJG8i9a-y_Dv8COO-FI6zzerf_j4_QaOK0WB6zlaLK-rSamha1wd93sN5JBBqoHxXb2v1MpvQ3Tn2iI1__4bbyY8T0hfh9puxmmJR_xWGDIYw4Yvm8vkIP1u9UYE0hh6pg3myT-wKMhuoEWZmDR8YPjN4suBrXh7k3Rky8UPewctZS-ku8tTjSsozPnHAXurHltcFBij')" }}
          ></div>
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.nameLabel')}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" placeholder={t('booking.namePlaceholder')} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.phoneLabel')}</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" placeholder={t('booking.phonePlaceholder')} />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.emailLabel')}</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" placeholder={t('booking.emailPlaceholder')} />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.otherContactLabel')}</label>
                <input type="text" name="otherContact" value={formData.otherContact} onChange={handleChange} className="w-full form-input-line font-body-md text-on-surface" placeholder={t('booking.otherContactPlaceholder')} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.dateLabel')}</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.programLabel')}</label>
                <select name="program" value={formData.program} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface bg-transparent">
                  <option value="" disabled>{t('booking.selectProgram')}</option>
                  {programs.map((prog, idx) => (
                    <option key={idx} value={prog} className="text-on-surface">{prog}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">{t('booking.requestsLabel')}</label>
              <textarea name="requests" value={formData.requests} onChange={handleChange} className="w-full form-input-line font-body-md text-on-surface resize-none" rows="4" placeholder={t('booking.requestsPlaceholder')}></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-[#FF7F50] text-white px-8 py-4 rounded-lg font-label-sm text-label-sm uppercase hover:saturate-150 transition-all active:scale-95 inline-flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? t('booking.submittingBtn') : t('booking.submitBtn')}
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-xl p-6 border-t-4 border-t-primary-container">
            <h3 className="font-headline-md text-headline-md text-deep-ocean mb-2">{t('booking.instantTitle')}</h3>
            <p className="font-body-md text-on-surface-variant mb-6">{t('booking.instantDesc')}</p>
            <div className="flex flex-col gap-3">
              {contacts.map((contact, idx) => {
                const isLink = !!contact.link;
                const Wrapper = isLink ? 'a' : 'button';
                const props = isLink ? {
                  href: contact.link,
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {
                  onClick: () => handleCopy(contact.id, contact.name),
                  type: "button"
                };

                return (
                  <Wrapper 
                    key={idx} 
                    {...props}
                    className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors group text-left w-full"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${contact.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{contact.icon}</span>
                      <div>
                        <div className="font-body-md font-semibold text-on-surface leading-tight">{contact.name}</div>
                        <div className="font-label-sm text-on-surface-variant">{contact.id}</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-sm">
                      {isLink ? 'open_in_new' : 'content_copy'}
                    </span>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
