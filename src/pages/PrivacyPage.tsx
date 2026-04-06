import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPage() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdateDate = new Date().toLocaleDateString(i18n.language === 'pt' ? 'pt-PT' : i18n.language === 'hi' ? 'hi-IN' : 'en-US');

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">{t('privacy.title')}</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-sm text-gray-400">{t('privacy.lastUpdate')}: {lastUpdateDate}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s1_title')}</h2>
            <p>{t('privacy.sections.s1_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s2_title')}</h2>
            <p>{t('privacy.sections.s2_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s3_title')}</h2>
            <p>{t('privacy.sections.s3_content')}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('privacy.sections.s3_item1')}</li>
              <li>{t('privacy.sections.s3_item2')}</li>
              <li>{t('privacy.sections.s3_item3')}</li>
              <li>{t('privacy.sections.s3_item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s4_title')}</h2>
            <p>{t('privacy.sections.s4_content')}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('privacy.sections.s4_item1')}</li>
              <li>{t('privacy.sections.s4_item2')}</li>
              <li>{t('privacy.sections.s4_item3')}</li>
              <li>{t('privacy.sections.s4_item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s5_title')}</h2>
            <p>{t('privacy.sections.s5_content')}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('privacy.sections.s5_item1')}</li>
              <li>{t('privacy.sections.s5_item2')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s6_title')}</h2>
            <p>{t('privacy.sections.s6_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s7_title')}</h2>
            <p>{t('privacy.sections.s7_content')}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{t('privacy.sections.s7_item1')}</li>
              <li>{t('privacy.sections.s7_item2')}</li>
              <li>{t('privacy.sections.s7_item3')}</li>
              <li>{t('privacy.sections.s7_item4')}</li>
              <li>{t('privacy.sections.s7_item5')}</li>
              <li>{t('privacy.sections.s7_item6')}</li>
              <li>{t('privacy.sections.s7_item7')}</li>
            </ul>
            <p className="mt-4">
              {t('privacy.sections.s7_footer')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s8_title')}</h2>
            <p>{t('privacy.sections.s8_content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('privacy.sections.s9_title')}</h2>
            <p>{t('privacy.sections.s9_content')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
