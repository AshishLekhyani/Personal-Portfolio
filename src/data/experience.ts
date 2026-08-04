export interface ExperienceItem {
  role: string;
  org: string;
  dates: string;
  description: string;
  badge?: { label: string; url: string };
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    org: 'Freelance',
    dates: 'Jan 2026 — Present',
    description:
      'Full-stack development for clients. Most recently built the platform for Steno Dexter, a Pitman Shorthand exam-prep service — course enrollment, daily dictations, weekly tests, and performance tracking for students preparing for government stenography exams (SSC, RSMSSB, High Courts, District Courts, Railways).',
    badge: { label: 'StenoDexter', url: 'https://stenodexter.com' },
  },
  {
    role: 'Co-Founder',
    org: 'KalyanX',
    dates: 'Oct 2025 — Present',
    description:
      'Co-founded an early-stage Ayurvedic medicine venture based in Rajsamand, owning product and technology — architecture, build decisions, and day-to-day execution.',
  },
];

export const volunteering: ExperienceItem[] = [
  {
    role: 'Student Coordinator (Co-Lead)',
    org: 'SOCH Social Club, Jaipur',
    dates: '2024 — 2025',
    description:
      'As Co-Lead, worked alongside the core team to plan and run multiple community outreach programs and campus donation drives, from initial planning through on-the-day execution. Coordinated schedules and task assignments for a volunteer base of 80+ students, keeping logistics running smoothly across several major club events over the year.',
  },
];

export interface EducationItem {
  degree: string;
  org: string;
  dates: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    org: 'JECRC Foundation (RTU), Jaipur, India',
    dates: '2021 — 2025',
    detail: 'CGPA: 7.98',
  },
  {
    degree: 'Senior Secondary Education (XII), CBSE',
    org: 'Vrindavan Public School, Ajmer, India',
    dates: '2020 — 2021',
    detail: 'Score: 93%',
  },
  {
    degree: 'Secondary Education (X), CBSE',
    org: 'St. Stephens School, Ajmer, India',
    dates: '2018 — 2019',
    detail: 'Score: 91.8%',
  },
];
