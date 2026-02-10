export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.books': 'Libros',
    'nav.about': 'Sobre la autora',
    'nav.resources': 'Recursos',
    'nav.community': 'Comunidad',

    // Home - Hero
    'hero.title': 'La oscuridad ya no da miedo',
    'hero.subtitle': 'Una trilogía de libros infantiles que ayuda a los más pequeños a superar sus miedos nocturnos',
    'hero.cta': 'Descubre los libros',

    // Home - Series Intro
    'series.title': 'Tres misiones, tres miedos superados',
    'series.description': 'Cada libro es una misión que guía a los niños de 3 a 7 años a enfrentar un miedo nocturno diferente. Con historias mágicas y herramientas prácticas, los pequeños descubren que la noche puede ser un lugar de aventuras.',
    'series.mission': 'Misión',

    // Books
    'books.title': 'Los libros',
    'books.seeAll': 'Ver todos los libros',
    'books.buyOnAmazon': 'Comprar en Amazon',
    'books.synopsis': 'Sinopsis',
    'books.details': 'Detalles',
    'books.materials': 'Materiales extra',
    'books.materialsDescription': 'Próximamente encontrarás aquí videos, podcasts y guías complementarias para cada misión.',
    'books.isbn': 'ISBN',
    'books.age': 'Edad recomendada',
    'books.ageRange': '3-7 años',
    'books.backToBooks': '← Volver a libros',

    // About
    'about.title': 'Sobre la autora',
    'about.subtitle': 'beetecu',
    'about.bio': 'Soy Elizabeth, mamá trabajadora de mellizos, y si hay algo que aprendí desde el primer día es que cada niño es un mundo completamente distinto. Lo que funciona con uno no siempre funciona con el otro, y eso me llevó a sumergirme en la psicología infantil para entender cómo acompañar a cada uno desde su propia forma de sentir.\n\nLas noches en mi casa fueron durante mucho tiempo un verdadero campo de batalla: llantos, miedos, «mamá no apagues la luz», carreras al cuarto a las tres de la mañana... Si estás leyendo esto, probablemente sabes exactamente de qué hablo.\n\nEstos libros nacieron de esas noches difíciles. No los escribió una experta desde un escritorio, sino una mamá desde la trinchera, buscando formas de que mis hijos entendieran qué es el miedo a la oscuridad y, sobre todo, que descubrieran que pueden superarlo. Porque cuando un niño entiende lo que siente, deja de ser tan aterrador.\n\nAquí comparto lo que a nosotros nos funcionó, con la esperanza de que a tu familia también le sirva. Porque ninguna madre debería sentirse sola a las tres de la mañana.',

    // Resources
    'resources.title': 'Recursos',
    'resources.subtitle': 'Tips y herramientas para noches tranquilas',
    'resources.sleepTips.title': 'Tips para la hora de dormir',
    'resources.sleepTips.1': 'Establece una rutina constante cada noche',
    'resources.sleepTips.2': 'Usa una luz tenue y cálida en la habitación',
    'resources.sleepTips.3': 'Lee uno de los libros de la serie juntos antes de dormir',
    'resources.sleepTips.4': 'Habla sobre los miedos de forma abierta y sin juzgar',
    'resources.sleepTips.5': 'Celebra cada pequeño avance',
    'resources.routines.title': 'Rutinas de sueño',
    'resources.routines.description': 'Próximamente encontrarás aquí rutinas descargables y guías para padres.',

    // Community
    'community.title': 'Comunidad',
    'community.subtitle': 'Comparte tu experiencia con otros padres',
    'community.description': 'Este es un espacio para que las familias compartan sus experiencias, hagan preguntas y se apoyen mutuamente en el camino de superar los miedos nocturnos.',

    // Footer
    'footer.copyright': '© {year} beetecu. Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con ❤️ para familias valientes',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.books': 'Books',
    'nav.about': 'About the author',
    'nav.resources': 'Resources',
    'nav.community': 'Community',

    // Home - Hero
    'hero.title': 'Darkness is no longer scary',
    'hero.subtitle': "A trilogy of children's books that helps little ones overcome their nighttime fears",
    'hero.cta': 'Discover the books',

    // Home - Series Intro
    'series.title': 'Three missions, three fears conquered',
    'series.description': 'Each book is a mission that guides children ages 3-7 to face a different nighttime fear. With magical stories and practical tools, little ones discover that the night can be a place of adventure.',
    'series.mission': 'Mission',

    // Books
    'books.title': 'The books',
    'books.seeAll': 'See all books',
    'books.buyOnAmazon': 'Buy on Amazon',
    'books.synopsis': 'Synopsis',
    'books.details': 'Details',
    'books.materials': 'Extra materials',
    'books.materialsDescription': 'Coming soon: videos, podcasts, and complementary guides for each mission.',
    'books.isbn': 'ISBN',
    'books.age': 'Recommended age',
    'books.ageRange': '3-7 years',
    'books.backToBooks': '← Back to books',

    // About
    'about.title': 'About the author',
    'about.subtitle': 'beetecu',
    'about.bio': "I'm Elizabeth, a working mom of twins, and if there's one thing I learned from day one, it's that every child is a completely different world. What works with one doesn't always work with the other, and that led me to dive deep into child psychology to understand how to support each one in their own way of feeling.\n\nNights at our house were a real battlefield for a long time: crying, fears, \"Mom, don't turn off the light,\" running to their room at three in the morning... If you're reading this, you probably know exactly what I'm talking about.\n\nThese books were born from those tough nights. They weren't written by an expert at a desk, but by a mom in the trenches, looking for ways to help my kids understand what the fear of the dark really is and, most importantly, to discover that they can overcome it. Because when a child understands what they feel, it stops being so scary.\n\nHere I share what worked for us, hoping it helps your family too. Because no mother should feel alone at three in the morning.",

    // Resources
    'resources.title': 'Resources',
    'resources.subtitle': 'Tips and tools for peaceful nights',
    'resources.sleepTips.title': 'Bedtime tips',
    'resources.sleepTips.1': 'Establish a consistent routine every night',
    'resources.sleepTips.2': 'Use a dim, warm light in the room',
    'resources.sleepTips.3': 'Read one of the series books together before bed',
    'resources.sleepTips.4': 'Talk about fears openly and without judgment',
    'resources.sleepTips.5': 'Celebrate every small step forward',
    'resources.routines.title': 'Sleep routines',
    'resources.routines.description': 'Coming soon: downloadable routines and parent guides.',

    // Community
    'community.title': 'Community',
    'community.subtitle': 'Share your experience with other parents',
    'community.description': 'This is a space for families to share their experiences, ask questions, and support each other on the journey of overcoming nighttime fears.',

    // Footer
    'footer.copyright': '© {year} beetecu. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ for brave families',
  },
} as const;
