import type { Lang } from './ui';

export interface Book {
  id: string;
  mission: number;
  slug: { es: string; en: string };
  title: { es: string; en: string };
  theme: { es: string; en: string };
  synopsis: { es: string; en: string };
  isbn: string | null;
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
    coverPlaceholder: '/images/mision-2-cover.png',
    color: 'from-purple-600 to-indigo-900',
  },
  {
    id: 'mission-3',
    mission: 3,
    slug: { es: 'mision-3', en: 'mission-3' },
    title: {
      es: 'El Lápiz de Sueños y la Clase del Trueno',
      en: 'The Dream Pencil and the Thunder Class',
    },
    theme: {
      es: 'Pesadillas',
      en: 'Nightmares',
    },
    synopsis: {
      es: 'Las pesadillas pueden dar mucho miedo, pero ¿y si pudieras reescribirlas? Con un lápiz mágico de sueños, los niños aprenderán a transformar sus pesadillas en aventuras increíbles. Porque hasta los truenos más fuertes pueden convertirse en música.',
      en: "Nightmares can be really scary, but what if you could rewrite them? With a magical dream pencil, children will learn to transform their nightmares into incredible adventures. Because even the loudest thunder can become music.",
    },
    isbn: '9798243436107',
    coverPlaceholder: '/images/book-3-placeholder.svg',
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
