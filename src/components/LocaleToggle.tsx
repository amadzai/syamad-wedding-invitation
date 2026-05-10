import { useLocale } from '../locale/useLocale';
import type { Locale } from '../locale/translations';

const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'ms', label: 'Bahasa Malaysia', flag: 'my' },
];

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-full border border-burgundy bg-white/90 p-1 backdrop-blur-sm sm:top-6 sm:right-6 sm:gap-0">
      {LOCALES.map(({ code, label, flag }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={label}
            className="flex h-5 w-7 cursor-pointer items-center justify-center rounded-md transition-all sm:h-6 sm:w-9"
          >
            <span
              className={`fi fi-${flag} block h-5 w-7 overflow-hidden rounded-md transition-[filter,opacity] sm:h-6 sm:w-9`}
              style={{
                filter: active
                  ? 'grayscale(0.4) contrast(1.05)'
                  : 'grayscale(1) contrast(1.1)',
                opacity: active ? 1 : 0.5,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
