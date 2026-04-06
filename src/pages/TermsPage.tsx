import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TermsPage() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdateDate = new Date().toLocaleDateString(i18n.language === 'pt' ? 'pt-PT' : i18n.language === 'hi' ? 'hi-IN' : 'en-US');

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">{t('terms.title')}</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-sm text-gray-400">{t('terms.lastUpdate')}: {lastUpdateDate}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s1_title')}</h2>
            <p>{t('terms.sections.s1_content')}</p>
            <p>{t('terms.sections.s1_content2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s2_title')}</h2>
            <p>{t('terms.sections.s2_content')}</p>
            <p>{t('terms.sections.s2_content2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s3_title')}</h2>
            <p>{t('terms.sections.s3_content')}</p>
            <p>{t('terms.sections.s3_content2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s4_title')}</h2>
            <p>{t('terms.sections.s4_content')}</p>
            <p>{t('terms.sections.s4_content2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s5_title')}</h2>
            <p>{t('terms.sections.s5_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s6_title')}</h2>
            <p>{t('terms.sections.s6_content')}</p>
            <p>{t('terms.sections.s6_content2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s7_title')}</h2>
            <p>{t('terms.sections.s7_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s8_title')}</h2>
            <p>{t('terms.sections.s8_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('terms.sections.s9_title')}</h2>
            <p>{t('terms.sections.s9_content')}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('terms.sections.s9_phone')}: +351 939 996 924</li>
              <li>{t('terms.sections.s9_address')}: Avenida Mateus Teixeira Azevedo 55, Tavira, Portugal</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
