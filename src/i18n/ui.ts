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
    'nav.books': 'Trilogía infantil',
    'nav.847': '847',
    'nav.about': 'Sobre la autora',
    'nav.resources': 'Recursos',
    'nav.community': 'Comunidad',

    // Home - Hero
    'hero.title': 'beetecu',
    'hero.subtitle': 'Porque entender lo que sientes es el primer paso para superarlo. Para niños con miedos. Para adultos con preguntas.',
    'hero.cta': 'Ver todos los libros',

    // Home - Series Intro
    'series.label': 'La trilogía infantil',
    'series.title': 'Tres misiones, tres miedos superados',
    'series.description': 'Cada libro es una misión que guía a los niños de 3 a 7 años a enfrentar un miedo nocturno diferente. Con historias mágicas y herramientas prácticas, los pequeños descubren que la noche puede ser un lugar de aventuras.',
    'series.mission': 'Misión',

    // Book 847
    'book847.badge': 'Próximamente',
    'book847.genre': 'Ensayo',
    'book847.subtitle': '¿Y si yo no soy yo?',
    'book847.teaser': 'Un ensayo para quien alguna vez se ha pillado a sí mismo haciendo algo habitual, automático, y ha tenido por un segundo la sensación extraña de no saber cuándo empezó a hacerlo así.',
    'book847.cta': 'Descubrir el libro',
    'book847.notifyCta': 'Avísame cuando salga',
    'book847.prologueLabel': 'Extracto del prólogo',
    'book847.prologue': 'Este libro no es para todo el mundo.\n\nEs para quien alguna vez se ha pillado a sí mismo haciendo algo — algo habitual, algo automático — y ha tenido, por un segundo, la sensación extraña de no saber cuándo empezó a hacerlo así.\n\nEs para quien ha tomado una decisión importante y, al mirarla desde lejos, ha notado que no podría haber salido de otra manera.\n\nEs para quien alguna vez ha intentado cambiar algo de fondo y ha descubierto, con cierta incomodad, que volvía. Siempre al mismo punto. Como si hubiera un radio fijo.\n\nSi ninguna de estas tres cosas te ha pasado, este libro no es para ti.\n\nCiérralo.\n\nSi has dudado antes de cerrarlo, ya tienes la respuesta.',
    'book847.whatIsIt': '¿De qué va?',
    'book847.description': 'Un SOC es un centro de operaciones de ciberseguridad. Una sala sin ventanas que monitoriza comportamiento en tiempo real. Detecta anomalías. Clasifica. Predice.\n\n847 usa ese sistema como lente para mirar hacia adentro. ¿Cuánto de lo que crees que eliges es en realidad patrón? ¿Y qué queda cuando lo sabes?\n\nUn ensayo que cruza ciberseguridad, psicología conductual y filosofía. Sin respuestas fáciles. Con las preguntas correctas.',

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
    'nav.books': "Children's trilogy",
    'nav.847': '847',
    'nav.about': 'About the author',
    'nav.resources': 'Resources',
    'nav.community': 'Community',

    // Home - Hero
    'hero.title': 'beetecu',
    'hero.subtitle': 'Because understanding what you feel is the first step to overcoming it. For children with fears. For adults with questions.',
    'hero.cta': 'See all books',

    // Home - Series Intro
    'series.label': "Children's trilogy",
    'series.title': 'Three missions, three fears conquered',
    'series.description': 'Each book is a mission that guides children ages 3-7 to face a different nighttime fear. With magical stories and practical tools, little ones discover that the night can be a place of adventure.',
    'series.mission': 'Mission',

    // Book 847
    'book847.badge': 'Coming soon',
    'book847.genre': 'Essay',
    'book847.subtitle': 'What if I am not me?',
    'book847.teaser': "An essay for anyone who has ever caught themselves doing something habitual, automatic, and felt — just for a second — the strange sensation of not knowing when they started doing it that way.",
    'book847.cta': 'Discover the book',
    'book847.notifyCta': 'Notify me when it\'s out',
    'book847.prologueLabel': 'From the prologue',
    'book847.prologue': "This book is not for everyone.\n\nIt's for anyone who has ever caught themselves doing something — something habitual, something automatic — and felt, just for a second, the strange sensation of not knowing when they started doing it that way.\n\nIt's for anyone who has made an important decision and, looking at it from a distance, noticed it couldn't have gone any other way.\n\nIt's for anyone who has ever tried to change something at the core — not on the surface, but at the core — and discovered, with a certain discomfort, that they came back. Always to the same point. As if there were a fixed radius.\n\nIf none of these three things have happened to you, this book is not for you.\n\nClose it.\n\nIf you hesitated before closing it, you already have your answer.",
    'book847.whatIsIt': 'What is it about?',
    'book847.description': 'A SOC is a Security Operations Center. A windowless room that monitors behavior in real time. Detects anomalies. Classifies. Predicts.\n\n847 uses that system as a lens to look inward. How much of what you think you choose is actually pattern? And what remains when you know?\n\nAn essay crossing cybersecurity, behavioral psychology, and philosophy. No easy answers. The right questions.',

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
