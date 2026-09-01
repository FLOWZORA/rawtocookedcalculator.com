import { ui, LOCALES } from './ui';
import type { Locale, TranslationKey } from './ui';

export { LOCALES, LOCALE_NAMES } from './ui';
export type { Locale, TranslationKey };

export function t(locale: Locale, key: TranslationKey): string {
  return (ui[locale] as Record<string, string>)[key] ?? (ui['en'] as Record<string, string>)[key] ?? key;
}

export function isValidLocale(lang: string): lang is Locale {
  return (LOCALES as readonly string[]).includes(lang);
}

export function getLangPrefix(locale: Locale): string {
  return locale === 'en' ? '' : `/${locale}`;
}

export function getLocalePath(locale: Locale, path: string): string {
  const prefix = getLangPrefix(locale);
  return prefix + (path.startsWith('/') ? path : `/${path}`);
}
