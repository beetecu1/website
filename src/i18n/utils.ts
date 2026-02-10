import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, base, maybeLang] = url.pathname.split('/');
  // Account for base path "/website"
  const lang = base === 'website' ? maybeLang : base;
  if (lang && lang in ui) {
    return lang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Get the base path prefix (e.g., "/website") */
function getBase(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '');
}

/** Build a localized path. Spanish paths have no prefix; English uses /en/ */
export function getLocalizedPath(lang: Lang, path: string): string {
  const base = getBase();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${lang}${cleanPath}`;
}

/** Get the equivalent path in the other language */
export function getAlternateLanguagePath(currentLang: Lang, currentPath: string): string {
  const targetLang: Lang = currentLang === 'es' ? 'en' : 'es';
  const base = getBase();

  // Remove base and language prefix to get the route
  let route = currentPath;
  if (route.startsWith(base)) {
    route = route.slice(base.length);
  }
  if (route.startsWith('/en')) {
    route = route.slice(3);
  }

  // Map Spanish slugs to English and vice versa
  const slugMap: Record<string, string> = {
    '/libros': '/books',
    '/books': '/libros',
    '/sobre-la-autora': '/about-the-author',
    '/about-the-author': '/sobre-la-autora',
    '/recursos': '/resources',
    '/resources': '/recursos',
    '/comunidad': '/community',
    '/community': '/comunidad',
    '/libros/mision-1': '/books/mission-1',
    '/books/mission-1': '/libros/mision-1',
    '/libros/mision-2': '/books/mission-2',
    '/books/mission-2': '/libros/mision-2',
    '/libros/mision-3': '/books/mission-3',
    '/books/mission-3': '/libros/mision-3',
  };

  // Normalize route
  if (route === '' || route === '/') {
    route = '/';
  }

  const mappedRoute = slugMap[route.replace(/\/$/, '')] ?? route;

  return getLocalizedPath(targetLang, mappedRoute);
}

/** Navigation items for a given language */
export function getNavItems(lang: Lang) {
  const t = useTranslations(lang);
  return [
    { label: t('nav.home'), href: getLocalizedPath(lang, '/') },
    { label: t('nav.books'), href: getLocalizedPath(lang, lang === 'es' ? '/libros' : '/books') },
    { label: t('nav.about'), href: getLocalizedPath(lang, lang === 'es' ? '/sobre-la-autora' : '/about-the-author') },
    { label: t('nav.resources'), href: getLocalizedPath(lang, lang === 'es' ? '/recursos' : '/resources') },
    { label: t('nav.community'), href: getLocalizedPath(lang, lang === 'es' ? '/comunidad' : '/community') },
  ];
}
