import { Info, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: id === 'contact-form' ? 'center' : 'start'
        });
      }
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'hi', label: 'HI' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/d/1JcDlCqhCcECmb6aCnMHr_G_Qj-FeGBHn" 
            alt="Real Builder Logo" 
            className="h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300">
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors uppercase">{t('nav.about')}</button>
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors uppercase">{t('nav.howItWorks')}</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors uppercase">{t('nav.pricing')}</button>
          <button onClick={() => scrollTo('courses')} className="hover:text-white transition-colors uppercase">{t('nav.courses')}</button>
          <button onClick={() => scrollTo('professionals')} className="hover:text-white transition-colors uppercase">PROFESSIONALS</button>
          <button onClick={() => scrollTo('partners')} className="hover:text-white transition-colors uppercase">PARTNERS</button>
          <button onClick={() => scrollTo('contact-form')} className="hover:text-white transition-colors uppercase">{t('nav.contact')}</button>
          <Link to="/faq" className="hover:text-white transition-colors uppercase">{t('nav.faq')}</Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-xs font-semibold"
            >
              <Globe size={16} />
              <span className="hidden sm:inline uppercase">{i18n.language.split('-')[0]}</span>
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-[#111315] border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-[80px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left text-xs font-bold hover:bg-white/5 transition-colors ${i18n.language.startsWith(lang.code) ? 'text-[#FFB800]' : 'text-gray-300'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openNotifyMe'))}
            className="text-white px-2 py-2 rounded-md text-xs font-bold tracking-wider hover:text-[#FFB800] transition-colors"
          >
            NOTIFY ME
          </button>
          
          <motion.button 
            onClick={() => scrollTo('contact-form')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden bg-[#FFB800] text-black px-4 md:px-6 py-2 rounded-md text-xs font-bold tracking-wider transition-all hover:bg-[#FFB800]/90"
          >
            {/* Animated lighting effect */}
            <motion.div 
              animate={{ 
                left: ['-100%', '200%'] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear",
                repeatDelay: 0.5
              }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
            />
            <span className="relative z-10">GET STARTED</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
