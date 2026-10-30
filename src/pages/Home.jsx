import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-32 md:pb-0 pt-0 md:pt-16">
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-fixed">
          <div 
            className="bg-cover bg-center w-full h-full opacity-80 mix-blend-overlay"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8HLQDRMAqMipan5jVUC7ZbXJCeWJ3G96a3_sgfk3kRWU4HBvA9hZJlNkuDaP17kf1T23ge8iNZth9e0P5AQEdBP2vQmjmKoxt0xcoPdhIlSMqxSx0d7vdGwX2wlQivgkcbQ31YQ9n0ErYCpVC76p7pMgSs52-urEWDuFV1tNgpRDh7KofQ_oKGV8jB-FTiecPkkg2GvueLrvCLB6f2ySYCJU6tzj2jApReGR2qzNaFwwzq3gQyy-h')" }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-gutter max-w-container-max mx-auto flex flex-col items-center">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary drop-shadow-lg mb-6">{t('home.heroTitle')}</h2>
          <p className="font-body-lg text-body-lg text-on-primary max-w-2xl mx-auto mb-10 drop-shadow-md">{t('home.heroDesc')}</p>
          <Link to="/programs" className="bg-secondary text-on-primary font-body-lg text-body-lg px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(0,174,239,0.2)] hover:bg-[#ff8f60] transition-colors active:scale-95 font-semibold">
            {t('home.explorePackages')}
          </Link>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-gutter py-section-gap-mobile md:py-section-gap-desktop">
        <div className="text-center mb-16">
          <h3 className="font-headline-md text-headline-md text-deep-ocean mb-4">{t('home.coursesTitle')}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">{t('home.coursesDesc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(0,174,239,0.08)] bg-surface-container-lowest">
            <div className="h-64 relative overflow-hidden">
              <img src="/main.jpg" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Fun Diving" />
            </div>
            <div className="p-8 relative">
              <div className="absolute -top-10 right-8 bg-surface-mist backdrop-blur-md p-4 rounded-full shadow-lg border border-white/50">
                <span className="material-symbols-outlined text-primary text-3xl">scuba_diving</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-deep-ocean mb-2 text-2xl">{t('home.funDivingTitle')}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{t('home.funDivingDesc')}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary-fixed/30 text-primary-container font-label-sm text-label-sm rounded-full">{t('home.certifiedDivers')}</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">{t('home.boatDives')}</span>
              </div>
              <Link to="/programs" className="inline-flex items-center text-primary font-body-md text-body-md font-semibold hover:text-primary-container transition-colors">
                {t('home.viewItineraries')} <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(0,174,239,0.08)] bg-surface-container-lowest">
            <div className="h-64 relative overflow-hidden">
              <img src="/sub.jpg" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Open Water Course" />
            </div>
            <div className="p-8 relative">
              <div className="absolute -top-10 right-8 bg-surface-mist backdrop-blur-md p-4 rounded-full shadow-lg border border-white/50">
                <span className="material-symbols-outlined text-primary text-3xl">school</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-deep-ocean mb-2 text-2xl">{t('home.openWaterTitle')}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{t('home.openWaterDesc')}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary-container/20 text-secondary font-label-sm text-label-sm rounded-full">{t('home.beginners')}</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">{t('home.padiCert')}</span>
              </div>
              <Link to="/programs" className="inline-flex items-center text-primary font-body-md text-body-md font-semibold hover:text-primary-container transition-colors">
                {t('home.learnMore')} <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Link to="/booking" className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-secondary text-on-primary rounded-2xl shadow-[0_10px_30px_rgba(0,174,239,0.2)] hover:bg-[#ff8f60] transition-transform active:scale-90 z-40 flex items-center gap-2 px-6 py-4">
        <span className="material-symbols-outlined">calendar_month</span>
        <span className="font-body-md text-body-md font-semibold">{t('home.bookNow')}</span>
      </Link>
    </div>
  );
};

export default Home;
