import { useTranslation } from 'react-i18next';

const KaiDive = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20 min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative px-gutter mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-label-md">
              Welcome to KAI DIVE
            </div>
            <h1 className="font-display text-display-md md:text-display-lg text-deep-ocean font-bold leading-tight">
              필리핀 세부 막탄에 위치한 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PSS 정식 인증 다이빙 센터</span>
            </h1>
            <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-2xl">
              카이다이브는 다이빙 전문 교육기관인 PSS 협회 정식 인증된 다이빙 교육센터로, 다양한 교육 다이빙, 펀다이빙, 체험다이빙을 전문적으로 진행하고 있습니다.
            </p>
          </div>
          
          {/* Main Image */}
          <div 
            className="flex-1 w-full h-[300px] md:h-[450px] relative"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskComposite: 'intersect'
            }}
          >
            <img 
              src="/main.jpg" 
              alt="KAI DIVE Main" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback Placeholder (shown if image is not yet saved) */}
            <div className="absolute inset-0 bg-surface-container-low flex flex-col items-center justify-center text-on-surface-variant/50 hidden">
              <span className="material-symbols-outlined text-5xl mb-2">image</span>
              <span className="font-medium text-sm">이미지를 public/main.jpg 로 저장해주세요</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-gutter mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,174,239,0.06)] border border-surface-container-low hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-deep-ocean mb-3">책임 교육</h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                라이센스 및 레크레이션 다이빙부터 테크니컬 다이빙, 프리 다이빙 등 다이빙 체험에서부터 강사과정까지 카이다이브에서 확실한 다이버가 되도록 책임 교육하겠습니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,174,239,0.06)] border border-surface-container-low hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">scuba_diving</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-deep-ocean mb-3">최신 정품 장비</h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                마레스 정품 장비로 교육을 하며, 주기적인 업그레이드를 통해 항상 최상의 상태와 최신의 장비를 유지하고 있습니다.
              </p>
            </div>

            {/* Card 3 (Image Placeholder) */}
            <div className="bg-surface-container-low rounded-3xl border border-white/20 shadow-inner flex items-center justify-center min-h-[250px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-mist to-transparent opacity-50"></div>
              <div className="flex flex-col items-center text-on-surface-variant/50">
                <span className="material-symbols-outlined text-4xl mb-2">image</span>
                <span className="font-medium text-sm">보조 이미지 자리</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Banner */}
      <section className="px-gutter">
        <div className="max-w-7xl mx-auto bg-deep-ocean rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <p className="text-surface-mist/80 text-title-lg mb-4 font-medium">
              저희 카이다이브는 다이빙을 통한 다양하고 즐거운 경험을 드리기 위해 항상 최선을 다하고 있습니다.
            </p>
            <h2 className="text-white text-headline-lg md:text-display-sm font-black mb-6">
              이제 선택만 하시면 됩니다.
            </h2>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-secondary font-bold text-headline-sm tracking-wide">
                진짜다KAI~ 재밌다KAI~ 오라KAI~
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaiDive;
