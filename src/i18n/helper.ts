import { DEFAULT_LOCALE, LOCALES } from "./consts";

const translations = {
  en: {
    footer: {
      copied: "Copied!",
      email: "Copy my email address",
      github: "Go to my GitHub profile",
      linkedin: "Go to my LinkedIn profile",
      title: "Software Engineer",
    },
    head: {
      description: "A blog about web development, programming and technology.",
      title: "Lucas Zamboni",
    },
    home: {
      intro: `Hi, I'm Lucas, a software engineer that is starting to blog about web
        development, programming, and technology.`,
      "writing.all": "View all",
      "writing.title": "My writing",
    },
    nav: {
      about: "about",
      locale: "en",
      writing: "writing",
    },
    terminal: {
      pause: "Pause playback",
      play: "Play the terminal session",
      replay: "Replay the terminal session",
      session: "Terminal session",
    },
    writing: {
      all: "View all",
      description: "Things I did for work and fun",
      title: "My writing",
    },
  },
  "pt-br": {
    footer: {
      copied: "Copiado!",
      email: "Copiar meu e-mail",
      github: "Visite meu Github",
      linkedin: "Visite meu LinkedIn",
      title: "Engenheiro de Software",
    },
    head: {
      description: "um blog sobre desenvolvimento web, programação e tecnologia.",
      title: "Lucas Zamboni",
    },
    home: {
      intro: `Olá, eu sou o Lucas, um engenheiro de software que está começando
        a blogar sobre desenvolvimento web, programação e tecnologia.`,
      "writing.all": "Ver todos",
      "writing.title": "Minha escrita",
    },
    nav: {
      about: "sobre",
      locale: "pt-br",
      writing: "escrita",
    },
    terminal: {
      pause: "Pausar a reprodução",
      play: "Reproduzir a sessão de terminal",
      replay: "Repetir a sessão de terminal",
      session: "Sessão de terminal",
    },
    writing: {
      all: "Ver todos",
      description: "O que eu fiz para trabalho e diversão",
      title: "Minha escrita",
    },
  },
} as const;

type Translations = typeof translations;
type Locales = (typeof LOCALES)[number];
type Sections = keyof Translations[Locales];

export function useTranslations<T extends Sections>(locale: string | undefined, section: T) {
  const validLocale = (locale as Locales) ?? DEFAULT_LOCALE;
  if (!LOCALES.includes(validLocale)) {
    throw new Error("Invalid locale");
  }

  return (t: keyof Translations[Locales][T]) => translations[validLocale][section][t];
}
