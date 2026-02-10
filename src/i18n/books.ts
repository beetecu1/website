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
      es: 'Cuando la luz se apaga, un mundo mágico cobra vida. Con una linterna especial como guía, los pequeños descubrirán que el Reino de la Noche está lleno de maravillas por explorar. Una historia que transforma la oscuridad de enemiga a amiga.',
      en: 'When the lights go out, a magical world comes alive. With a special flashlight as their guide, little ones will discover that the Kingdom of the Night is full of wonders to explore. A story that transforms darkness from foe to friend.',
    },
    isbn: '9798243436106',
    coverPlaceholder: '/images/book-1-placeholder.svg',
    color: 'from-indigo-600 to-blue-900',
  },
  {
    id: 'mission-2',
    mission: 2,
    slug: { es: 'mision-2', en: 'mission-2' },
    title: {
      es: 'Las Llaves del Reino de la Noche',
      en: 'The Keys to the Kingdom of the Night',
    },
    theme: {
      es: 'Dormir solito',
      en: 'Sleeping alone',
    },
    synopsis: {
      es: 'Llega el momento de un gran paso: dormir solito. Con llaves mágicas que abren puertas a mundos de sueños, los niños aprenderán que su habitación es un lugar seguro y lleno de posibilidades. Una aventura sobre la independencia y la valentía.',
      en: "It's time for a big step: sleeping alone. With magical keys that open doors to dream worlds, children will learn that their room is a safe place full of possibilities. An adventure about independence and bravery.",
    },
    isbn: null,
    coverPlaceholder: '/images/book-2-placeholder.svg',
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
