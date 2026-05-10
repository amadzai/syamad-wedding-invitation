import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { LocaleContext, type LocaleContextValue } from './context';
import { translations, type Locale } from './translations';

const STORAGE_KEY = 'locale';
const QUERY_KEY = 'lang';
const DEFAULT_LOCALE: Locale = 'en';

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'ms';
}

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const fromQuery = new URLSearchParams(window.location.search).get(QUERY_KEY);
  if (isLocale(fromQuery)) return fromQuery;

  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(fromStorage)) return fromStorage;

  return DEFAULT_LOCALE;
}

function syncUrl(locale: Locale) {
  const url = new URL(window.location.href);
  url.searchParams.set(QUERY_KEY, locale);
  window.history.replaceState(null, '', url);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    syncUrl(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => translations[locale][key],
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
