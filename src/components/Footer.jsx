import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest dark:bg-ink-black border-t border-outline-variant/30 hidden md:block">
      <div className="flex flex-col gap-8 px-gutter py-section-gap-mobile max-w-container-max mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <Link to="/" className="flex items-center">
            <img src="/logo-bottom.png" alt="KAI DIVE Logo" className="h-8 md:h-12 w-auto object-contain" />
          </Link>
          <div className="flex gap-6 flex-wrap">
            <Link to="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">FAQ</Link>
            <Link to="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Safety Standards</Link>
          </div>
        </div>
        <div className="text-center md:text-left font-body-md text-body-md text-secondary">
          © 2024 KAI DIVE CEBU. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
