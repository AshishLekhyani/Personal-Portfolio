export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  date: string;
}

export const projects: Project[] = [
  {
    name: 'EnvSync',
    description:
      "A secrets management platform for teams, modeled after Doppler and Infisical. Organization and project-scoped secret storage with AES-256-GCM envelope encryption (a unique data key per org, wrapped by a server master key), role-based access down to the environment tier, full version history with rotation and restore, and an audit trail on every reveal. Ships with a CLI for pulling secrets straight into CI/CD.",
    tech: ['Next.js 16', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'CLI'],
    liveUrl: 'https://envsync-five.vercel.app',
    codeUrl: 'https://github.com/AshishLekhyani/EnvSync',
    date: 'Jul 2026',
  },
  {
    name: 'GitScope',
    description:
      'A GitHub analytics and intelligence dashboard: repository health scoring, an AI-powered security scanner with CVE/CVSS lookups, contributor leaderboards, and DORA metrics, plus AI-generated PR descriptions and code review. Built on the Next.js App Router with React Server Components and a nine-provider AI cascade for resilience when any single provider is down.',
    tech: ['Next.js 15', 'TypeScript', 'NextAuth', 'Redux', 'TanStack Query', 'shadcn/ui'],
    liveUrl: 'https://git-scope-pi.vercel.app',
    codeUrl: 'https://github.com/AshishLekhyani/GitScope',
    date: 'Apr 2026',
  },
  {
    name: 'Video Codex',
    description:
      'A video transcoding and encryption workspace built around a Rust processing engine, with Zstd compression for fast, space-efficient transfers and a dark, glass-panelled UI on top.',
    tech: ['Rust', 'TypeScript', 'Zstd'],
    liveUrl: 'https://ashishlekhyani-video-codex.hf.space',
    codeUrl: 'https://github.com/AshishLekhyani/Video-Codex',
    date: 'Apr 2026',
  },
  {
    name: 'Steno Dexter',
    description:
      'Freelance client project: the platform for an online Pitman Shorthand training program preparing students for government stenography exams (SSC, RSMSSB, High Courts, District Courts, Railways) — course enrollment, daily dictations, weekly tests, and performance tracking.',
    tech: ['Next.js', 'Freelance client work'],
    liveUrl: 'https://stenodexter.com',
    date: '2026',
  },
  {
    name: 'TimerGame',
    description:
      'A millisecond-accurate timer/reaction game — stop the clock as close as you can to a target time. Built around imperative React patterns (forwardRef, useImperativeHandle) to expose a clean, encapsulated API from the timer component without breaking the declarative parent-child boundary, and React Portals for the results modal.',
    tech: ['React.js', 'Vite', 'React Portals'],
    codeUrl: 'https://github.com/AshishLekhyani/TimerGame',
    date: 'Feb 2026',
  },
  {
    name: 'NutriBite',
    description:
      "A mobile-first landing page built on plain semantic HTML5 and hand-written CSS Grid/Flexbox — no framework. The focus was eliminating layout shift across breakpoints with custom grid media rules, which cut initial paint time by roughly 25%.",
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    codeUrl: 'https://github.com/AshishLekhyani/NutriBite',
    date: 'Oct 2025',
  },
];
