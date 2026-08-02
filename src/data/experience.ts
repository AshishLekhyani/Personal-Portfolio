export interface ExperienceItem {
  role: string;
  org: string;
  dates: string;
  description: string;
  link?: { label: string; url: string };
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    org: 'Freelance',
    dates: 'Jan 2026 — Present',
    description: 'Full-stack development for clients, including Steno Dexter, a Pitman Shorthand exam-prep platform.',
    link: { label: 'stenodexter.com', url: 'https://stenodexter.com' },
  },
  {
    role: 'Co-Founder',
    org: 'KalyanX',
    dates: 'Oct 2025 — Present',
    description:
      'Co-founded an early-stage Ayurvedic medicine venture, owning product and technology end to end.',
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
