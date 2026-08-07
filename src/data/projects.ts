export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  date: string;
  sortDate: string;
}

export const projects: Project[] = [
  {
    name: 'EnvSync',
    description:
      'A secrets management platform for teams, similar to Doppler or Infisical. Encrypted secret storage, role-based access, full version history, and a CLI for CI/CD.',
    tech: ['Next.js 16', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'CLI'],
    liveUrl: 'https://envsync-five.vercel.app',
    codeUrl: 'https://github.com/AshishLekhyani/EnvSync',
    date: 'Jul 2026',
    sortDate: '2026-07-31',
  },
  {
    name: 'GitScope',
    description:
      'A GitHub analytics dashboard with repository health scoring, an AI security scanner, contributor leaderboards, and DORA metrics.',
    tech: ['Next.js 15', 'TypeScript', 'NextAuth', 'Redux', 'TanStack Query', 'shadcn/ui'],
    liveUrl: 'https://git-scope-pi.vercel.app',
    codeUrl: 'https://github.com/AshishLekhyani/GitScope',
    date: 'Apr 2026',
    sortDate: '2026-04-30',
  },
  {
    name: 'Video Codex',
    description:
      'A video transcoding and encryption workspace built on a Rust processing engine, with Zstd compression for fast, space-efficient transfers.',
    tech: ['Rust', 'TypeScript', 'Zstd'],
    liveUrl: 'https://ashishlekhyani-video-codex.hf.space',
    codeUrl: 'https://github.com/AshishLekhyani/Video-Codex',
    date: 'Apr 2026',
    sortDate: '2026-04-07',
  },
  {
    name: 'TimerGame',
    description:
      'A millisecond-accurate timer and reaction game. Stop the clock as close as you can to a target time, built with React and Vite.',
    tech: ['React.js', 'Vite', 'React Portals'],
    liveUrl: 'https://timergame-app.netlify.app',
    codeUrl: 'https://github.com/AshishLekhyani/TimerGame',
    date: 'Feb 2026',
    sortDate: '2026-02-01',
  },
  {
    name: 'NutriBite',
    description:
      'A mobile-first landing page built with plain HTML5 and hand-written CSS, no framework. Focused on eliminating layout shift, which cut initial paint time by about 25%.',
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    liveUrl: 'https://nutribite-app.netlify.app',
    codeUrl: 'https://github.com/AshishLekhyani/NutriBite',
    date: 'Oct 2025',
    sortDate: '2025-10-01',
  },
];
