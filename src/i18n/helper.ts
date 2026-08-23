import type { LOCALES } from "./consts";

const translations = {
  en: {
    footer: {
      title: "Software Engineer",
    },
    head: {
      description: "A blog about web development, programming and technology.",
      title: "Lucas Zamboni",
    },
    nav: {
      about: "about",
      locale: "EN",
      writing: "writing",
    },
  },
  "pt-br": {
    footer: {
      title: "Engenheiro de Software",
    },
    head: {
      description: "um blog sobre desenvolvimento web, programação e tecnologia.",
      title: "Lucas Zamboni",
    },
    nav: {
      about: "sobre",
      locale: "PTBR",
      writing: "escrita",
    },
  },
} as const;

type Translations = typeof translations;
type Locales = (typeof LOCALES)[number];
type Sections = keyof Translations[Locales];

export function useTranslations<T extends Sections>(locale: Locales, section: T) {
  return (t: keyof Translations[Locales][T]) => translations[locale][section][t];
}
