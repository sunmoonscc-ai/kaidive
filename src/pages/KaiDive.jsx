import { useTranslation } from 'react-i18next';

const KaiDive = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20 min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative px-gutter mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-sm tracking-widest shadow-sm">
              {t('kaidive.badge')}
            </div>
            <h1 className="font-display text-[clamp(1.25rem,4.5vw,2rem)] md:text-4xl lg:text-[2.6rem] text-deep-ocean font-bold leading-tight md:leading-tight lg:leading-snug tracking-tight">
              {t('kaidive.heroTitle1')}<br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> {t('kaidive.heroTitle2')}</span>
            </h1>
            <div className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-2xl mt-6 space-y-4">
              <p>{t('kaidive.heroDesc1')}</p>
              <p>{t('kaidive.heroDesc2')}</p>
              <p>{t('kaidive.heroDesc3')}</p>
            </div>
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
            {/* Fallback Placeholder */}
            <div className="absolute inset-0 bg-surface-container-low flex flex-col items-center justify-center text-on-surface-variant/50 hidden">
              <span className="material-symbols-outlined text-5xl mb-2">image</span>
              <span className="font-medium text-sm">public/main.jpg</span>
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
              <h3 className="font-headline-sm text-headline-sm font-bold text-deep-ocean mb-3">{t('kaidive.feature1Title')}</h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                {t('kaidive.feature1Desc')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,174,239,0.06)] border border-surface-container-low hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">scuba_diving</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-deep-ocean mb-3">{t('kaidive.feature2Title')}</h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                {t('kaidive.feature2Desc')}
              </p>
            </div>

            {/* Card 3 (Sub Image) */}
            <div className="rounded-3xl shadow-[0_10px_30px_rgba(0,174,239,0.06)] border border-surface-container-low overflow-hidden relative min-h-[250px] hover:-translate-y-1 transition-transform duration-300">
              <img 
                src="/sub.jpg" 
                alt="KAI DIVE Sub" 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-surface-container-low flex flex-col items-center justify-center text-on-surface-variant/50 hidden">
                <span className="material-symbols-outlined text-4xl mb-2">image</span>
                <span className="font-medium text-sm">public/sub.jpg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & QR Section */}
      <section className="px-gutter mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-4">{t('kaidive.connectTitle')}</h2>
            <p className="text-on-surface-variant text-body-lg">{t('kaidive.connectDesc')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'Facebook', id: 'kai sam 720051', icon: 'thumb_up', img: '/qr-facebook.jpg', color: 'bg-[#1877F2] text-white', link: 'https://www.facebook.com/kai.sam.720051' },
              { name: 'Instagram', id: 'Kaisam2018', icon: 'photo_camera', img: '/qr-instagram.jpg', color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white', link: 'https://www.instagram.com/Kaisam2018' },
              { name: 'LINE', id: 'kaidive', icon: 'chat', img: '/qr-line.jpg', color: 'bg-[#00B900] text-white', link: 'https://line.me/ti/p/17_V1Kct0L' },
              { name: 'KakaoTalk', id: 'mawlove3884', icon: 'forum', img: '/qr-kakao.jpg', color: 'bg-[#FEE500] text-[#371d1e]' },
              { name: 'WhatsApp', id: 'chang sic woo(Sam)', icon: 'chat', img: '/qr-whatsapp.jpg', color: 'bg-[#25D366] text-white', link: 'https://api.whatsapp.com/message/6CTKQD3R4N75G1?autoload=1&app_absent=0' },
              { name: 'Location', id: 'Kai dive shop', icon: 'location_on', img: '/qr-map.jpg', color: 'bg-[#EA4335] text-white', link: 'https://www.google.com/maps/search/?api=1&query=카이+다이브+막탄' }
            ].map((contact) => {
              const hasLink = !!contact.link;
              const CardWrapper = hasLink ? 'a' : 'div';
              
              const clickProps = hasLink ? {
                href: contact.link,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {
                onClick: () => {
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(contact.id).then(() => {
                      alert(t('kaidive.copyAlertSuccess', { name: contact.name, id: contact.id }));
                    }).catch(() => {
                      alert(t('kaidive.copyAlertFail'));
                    });
                  } else {
                    const textArea = document.createElement("textarea");
                    textArea.value = contact.id;
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                      document.execCommand('copy');
                      alert(t('kaidive.copyAlertSuccess', { name: contact.name, id: contact.id }));
                    } catch {
                      alert(t('kaidive.copyAlertFail'));
                    }
                    document.body.removeChild(textArea);
                  }
                },
                role: "button",
                tabIndex: 0,
                onKeyDown: (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }
              };

              return (
                <CardWrapper 
                  key={contact.name} 
                  {...clickProps}
                  className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_10px_30px_rgba(0,174,239,0.06)] border border-surface-container-low flex flex-col items-center transition-all duration-300 text-center cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 w-full"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-sm ${contact.color}`}>
                    <span className="material-symbols-outlined text-xl md:text-2xl">{contact.icon}</span>
                  </div>
                  <h4 className="font-bold text-deep-ocean text-sm md:text-base mb-1">{contact.name}</h4>
                  <p className="text-on-surface-variant text-xs md:text-sm font-medium mb-4 break-all">{contact.id}</p>
                  
                  <div className="w-full aspect-square bg-surface-container-low rounded-xl border border-white/20 overflow-hidden relative shadow-inner">
                    {contact.img ? (
                      <>
                        <img 
                          src={contact.img} 
                          alt={`${contact.name} QR`} 
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant/50 hidden bg-surface-variant/30">
                          <span className="material-symbols-outlined text-xl md:text-2xl mb-1">qr_code_scanner</span>
                          <span className="text-[9px] md:text-[10px] text-center px-1 font-semibold">{contact.img}</span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant/70 bg-surface-variant/20 hover:bg-primary/5 transition-colors">
                        <span className="material-symbols-outlined text-3xl md:text-4xl mb-2 text-primary">content_copy</span>
                        <span className="text-xs md:text-sm font-semibold text-primary">{t('kaidive.clickToCopy')}</span>
                      </div>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
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
              {t('kaidive.sloganSub')}
            </p>
            <h2 className="text-white text-headline-lg md:text-display-sm font-black mb-6">
              {t('kaidive.sloganMain')}
            </h2>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-secondary-container font-black text-2xl tracking-widest">
                {t('kaidive.sloganHighlight')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaiDive;
