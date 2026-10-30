import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer 
      className="w-full hidden md:block"
      style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgb(0, 85, 164) 100%)' }}
    >
      <div className="flex justify-between items-end px-gutter pt-16 md:pt-24 pb-0 max-w-container-max mx-auto">
        
        <div className="flex items-end gap-6 md:gap-8">
          <Link to="/" className="block leading-none">
            <img 
              src="/logo-bottom.png" 
              alt="KAI DIVE Logo" 
              className="h-20 md:h-28 w-auto object-contain block" 
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                maskComposite: 'intersect'
              }}
            />
          </Link>
          <div className="font-body-md text-body-md text-white/90 pb-3 md:pb-5">
            {t('footer.copyright')}
          </div>
        </div>

        <div className="flex gap-6 pb-3 md:pb-5">
          <Link to="#" className="font-body-md text-body-md text-white/80 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
          <Link to="#" className="font-body-md text-body-md text-white/80 hover:text-white transition-colors">{t('footer.termsOfService')}</Link>
          <Link to="#" className="font-body-md text-body-md text-white/80 hover:text-white transition-colors">{t('footer.faq')}</Link>
          <Link to="#" className="font-body-md text-body-md text-white/80 hover:text-white transition-colors">{t('footer.safetyStandards')}</Link>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
