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
      'Co-founded an early-stage Ayurvedic medicine venture, owning product and technology end to end — from platform architecture to day-to-day build decisions — while co-founders lead the Ayurvedic formulation and business side.',
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
