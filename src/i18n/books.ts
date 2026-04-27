import type { Lang } from './ui';

export interface Book {
  id: string;
  mission: number;
  slug: { es: string; en: string };
  title: { es: string; en: string };
  theme: { es: string; en: string };
  synopsis: { es: string; en: string };
  isbn: string | null;
  amazonUrl: string | null;
  coverPlaceholder: string;
  color: string;
}

export const books: Book[] = [
  {
    id: 'mission-1',
    mission: 1,
    slug: { es: 'mision-1', en: 'mission-1' },
    title: {
      es: 'La Linterna y el Reino de la Noche',
      en: 'The Flashlight and the Kingdom of the Night',
    },
    theme: {
      es: 'Miedo a la oscuridad',
      en: 'Fear of the dark',
    },
    synopsis: {
      es: 'Daniel y Gabriel, dos mellizos, descubren que las sombras no son "cosas malas" sino formas que cambian cuando mueves la luz. Con la ayuda de Flarina, una dragoncita mensajera del Reino de la Noche, y una linterna como herramienta, aprenderán a mirar, comprobar y transformar lo que asusta. Incluye mini-misiones por niveles (3-7 años), respiración dragón y reto de 7 noches con progreso visible.',
      en: 'Daniel and Gabriel, twin brothers, discover that shadows aren\'t "bad things" but shapes that change when you move the light. With the help of Flarina, a little dragon messenger from the Kingdom of the Night, and a flashlight as their tool, they\'ll learn to look, check and transform what scares them. Includes leveled mini-missions (ages 3-7), dragon breathing and a 7-night challenge with visible progress.',
    },
    isbn: '9798243436106',
    amazonUrl: 'https://www.amazon.es/dp/B0GV2D8BJB',
    coverPlaceholder: '/images/mision-1/cover.png',
    color: 'from-indigo-600 to-blue-900',
  },
  {
    id: 'mission-2',
    mission: 2,
    slug: { es: 'mision-2', en: 'mission-2' },
    title: {
      es: 'La Llave del Castillo',
      en: 'The Key to the Castle',
    },
    theme: {
      es: 'Dormir solito',
      en: 'Sleeping alone',
    },
    synopsis: {
      es: 'Llega el momento de un gran paso: dormir solito. Con una llave mágica que convierte su habitación en un castillo seguro, los niños aprenderán que su cuarto es un lugar lleno de posibilidades. Una aventura sobre la independencia y la valentía.',
      en: "It's time for a big step: sleeping alone. With a magical key that turns their room into a safe castle, children will learn that their bedroom is a place full of possibilities. An adventure about independence and bravery.",
    },
    isbn: null,
    amazonUrl: null,
    coverPlaceholder: '/images/mision-2/cover.png',
    color: 'from-purple-600 to-indigo-900',
  },
  {
    id: 'mission-3',
    mission: 3,
    slug: { es: 'mision-3', en: 'mission-3' },
    title: {
      es: 'El Faro de los Sueños Perdidos',
      en: 'The Lighthouse of Lost Dreams',
    },
    theme: {
      es: 'Pesadillas',
      en: 'Nightmares',
    },
    synopsis: {
      es: 'Daniel se despierta de golpe en mitad de la noche. Las pesadillas hacen eso: dejan el susto pegado aunque el sueño ya haya terminado. Pero ¿y si el sueño fuera tuyo para terminarlo? Con una botella de los sueños y un faro mágico, Daniel y Gabriel descubren que las pesadillas son historias sin terminar — y que el final también les pertenece a ellos.',
      en: 'Daniel wakes up suddenly in the middle of the night. Nightmares do that — they leave the fright behind even after the dream is over. But what if the dream were yours to finish? With a dream bottle and a magical lighthouse, Daniel and Gabriel discover that nightmares are unfinished stories — and that the ending belongs to them too.',
    },
    isbn: null,
    amazonUrl: null,
    coverPlaceholder: '/images/mision-3/cover.png',
    color: 'from-violet-600 to-purple-900',
  },
];

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getBookBySlug(slug: string, lang: Lang): Book | undefined {
  return books.find((b) => b.slug[lang] === slug);
}

export function getLocalizedBookPath(book: Book, lang: Lang): string {
  const prefix = lang === 'es' ? '/libros' : '/books';
  return `${prefix}/${book.slug[lang]}`;
}
