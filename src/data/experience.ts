export interface ExperienceItem {
  role: string;
  org: string;
  dates: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Independent',
    dates: 'Jan 2026 — Present',
    description:
      'Building full-stack products end to end for clients and my own ventures, including EnvSync (secrets management) and GitScope (GitHub analytics).',
  },
  {
    role: 'Co-Founder',
    org: 'KalyanX',
    dates: 'Oct 2025 — Present',
    description:
      'Co-founded an Ayurvedic medicine venture, leading product and technology.',
  },
];

export const volunteering: ExperienceItem[] = [
  {
    role: 'Student Coordinator (Co-Lead)',
    org: 'SOCH Social Club, Jaipur',
    dates: '2024 — 2025',
    description:
      'Co-led a core team organizing community outreach programs and campus donation drives, coordinating 80+ volunteers across major club events.',
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
    org: 'JECRC Foundation (RTU), Jaipur',
    dates: '2021 — 2025',
    detail: 'CGPA: 7.98',
  },
];
