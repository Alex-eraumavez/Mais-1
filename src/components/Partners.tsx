import { Building2, Wrench, HardHat, Truck, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners" className="py-32 bg-[#15181b] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            <Trans i18nKey="partners.title">
              Trusted <span className="text-[#FFB800]">Partners</span>
            </Trans>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Partner 1 */}
          <div className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-[#FFB800]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
              <Building2 size={24} />
            </div>
            <span className="text-gray-300 text-sm font-bold text-center">
              <Trans i18nKey="partners.categories.construction">
                Construction<br/>Firms
              </Trans>
            </span>
          </div>

          {/* Partner 2 */}
          <div className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-[#FFB800]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
              <Wrench size={24} />
            </div>
            <span className="text-gray-300 text-sm font-bold text-center">
              <Trans i18nKey="partners.categories.tools">
                Tool<br/>Manufacturers
              </Trans>
            </span>
          </div>

          {/* Partner 3 */}
          <div className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-[#FFB800]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
              <HardHat size={24} />
            </div>
            <span className="text-gray-300 text-sm font-bold text-center">
              <Trans i18nKey="partners.categories.safety">
                Safety<br/>Equipment
              </Trans>
            </span>
          </div>

          {/* Partner 4 */}
          <div className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-[#FFB800]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
              <Truck size={24} />
            </div>
            <span className="text-gray-300 text-sm font-bold text-center">
              <Trans i18nKey="partners.categories.materials">
                Material<br/>Suppliers
              </Trans>
            </span>
          </div>

          {/* Partner 5 */}
          <div className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-[#FFB800]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
              <ShieldCheck size={24} />
            </div>
            <span className="text-gray-300 text-sm font-bold text-center">
              <Trans i18nKey="partners.categories.insurance">
                Insurance<br/>Providers
              </Trans>
            </span>
          </div>

          {/* Partner 6 */}
          <div className="bg-[#1a1d21] rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-[#FFB800]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
              <Zap size={24} />
            </div>
            <span className="text-gray-300 text-sm font-bold text-center">
              <Trans i18nKey="partners.categories.energy">
                Energy<br/>Solutions
              </Trans>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
