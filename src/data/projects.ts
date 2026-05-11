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
    category: 'Flutter',
    description: 'En mobilapplikation som tillåter användare att tagga varandra med varandras citat. Fungerar som en "micro-social-media platform".',
    technologies: ['Flutter', 'Dart', 'Supabase'],
    imageUrl: '/projects/PinQuo-pic.png',
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
  }
];

export const categories = ['Alla', 'React', 'TypeScript', 'Flutter'] as const;