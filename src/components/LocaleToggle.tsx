import { useLocale } from '../locale/useLocale';
import type { Locale } from '../locale/translations';

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ms', label: 'BM' },
];

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-full border border-burgundy bg-white/90 p-1 font-seasons text-xs tracking-widest backdrop-blur-sm sm:top-6 sm:right-6 sm:text-sm">
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 transition-colors ${
              active
                ? 'bg-burgundy text-white'
                : 'text-burgundy hover:bg-burgundy/10'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
