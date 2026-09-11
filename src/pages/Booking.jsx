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
  { name: 'WeChat', id: 'mawlove2828', icon: 'sms', color: 'text-[#07C160]' }
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
      alert("상담 전송용 API URL이 설정되지 않았습니다. 관리자에게 문의하세요.");
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
        alert("상담 요청이 성공적으로 전송되었습니다. 확인 후 연락드리겠습니다!");
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
        alert("전송 중 오류가 발생했습니다: " + result.message);
      }
    } catch (error) {
      alert("상담 요청 전송에 실패했습니다. 잠시 후 다시 시도해주세요.\n에러: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, name) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`${name} 아이디(${text})가 복사되었습니다.`);
      });
    } else {
      alert('아이디 복사에 실패했습니다. 수동으로 복사해주세요: ' + text);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-section-gap-mobile md:pb-section-gap-desktop px-gutter max-w-container-max mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-ocean mb-4">상담하기</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          세부에서의 프리미엄 다이빙 경험을 상담받아보세요. 아래 정보를 작성하시거나, 빠른 상담을 위해 메신저로 직접 문의해주세요.
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
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">이름 (Name)</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" placeholder="홍길동" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">전화번호</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" placeholder="010-1234-5678" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">이메일 주소</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">기타 연락처 (카톡 ID 등)</label>
                <input type="text" name="otherContact" value={formData.otherContact} onChange={handleChange} className="w-full form-input-line font-body-md text-on-surface" placeholder="카톡ID: kaisam" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">원하는 날짜</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">원하는 프로그램</label>
                <select name="program" value={formData.program} onChange={handleChange} required className="w-full form-input-line font-body-md text-on-surface bg-transparent">
                  <option value="" disabled>프로그램을 선택하세요</option>
                  {programs.map((prog, idx) => (
                    <option key={idx} value={prog} className="text-on-surface">{prog}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">기타 요구사항</label>
              <textarea name="requests" value={formData.requests} onChange={handleChange} className="w-full form-input-line font-body-md text-on-surface resize-none" rows="4" placeholder="식단 요구사항, 장비 사이즈, 다이빙 경험 등 자유롭게 입력해주세요."></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-[#FF7F50] text-white px-8 py-4 rounded-lg font-label-sm text-label-sm uppercase hover:saturate-150 transition-all active:scale-95 inline-flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? '전송 중...' : '상담요청 (Request Consultation)'}
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-xl p-6 border-t-4 border-t-primary-container">
            <h3 className="font-headline-md text-headline-md text-deep-ocean mb-2">빠른 상담</h3>
            <p className="font-body-md text-on-surface-variant mb-6">원하시는 메신저로 더욱 빠르게 상담받으실 수 있습니다.</p>
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
