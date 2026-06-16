export interface Project {
  id: string;
  title: string;
  category: 'Alla' | 'React' | 'TypeScript' | 'Flutter';
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean; // view on dashboard
}

export const projectsData: Project[] = [
  {
    id: 'pinquote',
    title: 'PinQuote',
    category: 'TypeScript',
    description: 'En mobilapplikation som tillåter användare att tagga varandra med varandras citat. Fungerar som en "micro-social-media platform".',
    technologies: ['TypeScript', 'React', 'Supabase'],
    imageUrl: '/projects/PinQuo.png',
    liveUrl: 'https://pinquo.app/',
    githubUrl: 'https://github.com/DanielPallin/pinquo',
    featured: true,
  },
  {
    id: 'larstigen',
    title: 'Lärstigen',
    category: 'TypeScript',
    description: 'En lättnavigerad och användarvänlig skolplattform inriktad på förskola, under utveckling',
    technologies: ['TypeScript', 'HTML', 'CSS', 'Vite'],
    imageUrl: '/projects/Larstigen-pic.png',
    liveUrl: 'https://larstigen.vercel.app/',
    githubUrl: 'https://github.com/DanielPallin/larstigen',
    featured: true,
  },
  {
    id: 'isitbis',
    title: 'Is it BiS?',
    category: 'React',
    description: 'Ett verktyg för att hitta passande hårdvaru-komponenter baserat på vilket spel du söker efter. Byggt med moderna React-hooks och komponenter.',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    imageUrl: '/projects/IsItBiS-pic.png',
    liveUrl: 'https://is-it-bis.vercel.app/',
    githubUrl: 'https://github.com/DanielPallin/isitbis',
    featured: true,
  },
  {
    id: 'the-saga-chapter-III',
    title: 'The Saga - Chapter III',
    category: 'React',
    description: 'En högpresterande landningssida för ett mytiskt RPG byggt i Unreal Engine 5. Projektet fokuserar på djup immersion genom cinematiska animationer, atmosfärisk ljudbild och en sömlös användarupplevelse optimerad för extremt hög Lighthouse-score.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Web3Forms'],
    imageUrl: '/projects/the-saga.png',
    liveUrl: 'https://the-saga-chapter-iii.vercel.app/',
    githubUrl: 'https://github.com/DanielPallin/TheSagaChapterIII',
    featured: true,
  }
];

export const categories = ['Alla', 'React', 'TypeScript', 'Flutter'] as const;