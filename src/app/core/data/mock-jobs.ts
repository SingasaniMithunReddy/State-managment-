import { Job } from '../models/job.model';

export const MOCK_JOBS: Job[] = [
  {
    id: 101,
    title: 'Frontend Engineer',
    company: 'BrightLayer',
    logoText: 'BL',
    location: 'New York, NY',
    remoteMode: 'Hybrid',
    employmentType: 'Full-time',
    level: 'Mid',
    salaryRange: '$120k - $145k',
    tags: ['Angular', 'Design Systems', 'Accessibility'],
    featured: true,
    postedAt: '2 days ago',
    description: 'Build polished candidate and recruiter experiences for a modern hiring platform.',
    responsibilities: [
      'Create responsive Angular interfaces for job discovery, applications, and account flows.',
      'Translate product requirements into maintainable standalone components and reusable UI patterns.',
      'Partner with design and product to improve conversion across the hiring funnel.'
    ],
    requirements: [
      'Strong Angular and TypeScript fundamentals.',
      'Experience with component architecture, state management, and accessibility.',
      'Comfort working closely with product and design stakeholders.'
    ],
    perks: ['Remote flexibility', 'Equity grant', 'Learning stipend']
  },
  {
    id: 102,
    title: 'AI Product Designer',
    company: 'VectorLoop',
    logoText: 'VL',
    location: 'Austin, TX',
    remoteMode: 'Remote',
    employmentType: 'Full-time',
    level: 'Senior',
    salaryRange: '$135k - $165k',
    tags: ['UX', 'Figma', 'AI Workflow'],
    featured: true,
    postedAt: '1 day ago',
    description: 'Shape end-to-end AI-assisted hiring experiences from concept to polished release.',
    responsibilities: [
      'Design candidate and recruiter workflows that balance speed, trust, and clarity.',
      'Prototype AI-assisted screening, matching, and messaging experiences.',
      'Collaborate with engineering to ship design systems and interaction patterns.'
    ],
    requirements: [
      'Strong product design portfolio for SaaS products.',
      'Deep Figma experience and systems thinking.',
      'Ability to simplify complex workflows for non-technical users.'
    ],
    perks: ['Remote-first team', 'Quarterly retreats', 'Home office budget']
  },
  {
    id: 103,
    title: 'Talent Operations Analyst',
    company: 'NorthPeak',
    logoText: 'NP',
    location: 'Chicago, IL',
    remoteMode: 'On-site',
    employmentType: 'Full-time',
    level: 'Entry',
    salaryRange: '$70k - $82k',
    tags: ['Operations', 'Reporting', 'Recruiting'],
    featured: false,
    postedAt: '4 days ago',
    description: 'Support recruiting efficiency through dashboards, process improvements, and insight generation.',
    responsibilities: [
      'Track candidate funnel metrics and recruiter productivity.',
      'Build recurring reports for hiring managers and leadership.',
      'Identify workflow bottlenecks and recommend improvements.'
    ],
    requirements: [
      'Strong Excel or BI fundamentals.',
      'Excellent communication and stakeholder management.',
      'Comfort with high-volume operational workflows.'
    ],
    perks: ['401(k) match', 'Medical coverage', 'Career growth path']
  },
  {
    id: 104,
    title: 'Full Stack Engineer',
    company: 'CloudFrame',
    logoText: 'CF',
    location: 'Seattle, WA',
    remoteMode: 'Remote',
    employmentType: 'Full-time',
    level: 'Senior',
    salaryRange: '$150k - $185k',
    tags: ['TypeScript', 'APIs', 'Platform'],
    featured: true,
    postedAt: '3 days ago',
    description: 'Ship product features across frontend and platform layers for a fast-moving job marketplace.',
    responsibilities: [
      'Implement user-facing experiences and integration-ready service layers.',
      'Work with product to deliver reliable, measurable feature releases.',
      'Improve performance and maintainability across the application stack.'
    ],
    requirements: [
      'Strong experience with modern web platforms and TypeScript.',
      'Ability to work across UI and API contracts.',
      'Experience with scalable SaaS applications.'
    ],
    perks: ['Stock options', 'Annual bonus', 'Flexible PTO']
  },
  {
    id: 105,
    title: 'Recruiting Coordinator',
    company: 'LumaHire',
    logoText: 'LH',
    location: 'Boston, MA',
    remoteMode: 'Hybrid',
    employmentType: 'Full-time',
    level: 'Entry',
    salaryRange: '$58k - $67k',
    tags: ['Scheduling', 'Candidate Experience', 'Operations'],
    featured: false,
    postedAt: '6 days ago',
    description: 'Own candidate scheduling, communication touchpoints, and day-to-day hiring logistics.',
    responsibilities: [
      'Coordinate interviews and maintain recruiting calendars.',
      'Ensure candidates receive timely and polished communication.',
      'Support recruiters with process tracking and documentation.'
    ],
    requirements: [
      'Excellent organization and attention to detail.',
      'Strong written communication.',
      'Comfort in a fast-paced hiring environment.'
    ],
    perks: ['Hybrid flexibility', 'Paid volunteer days', 'Transit benefit']
  },
  {
    id: 106,
    title: 'Data Analyst, Hiring Intelligence',
    company: 'OrbitWorks',
    logoText: 'OW',
    location: 'San Francisco, CA',
    remoteMode: 'Remote',
    employmentType: 'Contract',
    level: 'Mid',
    salaryRange: '$85/hr',
    tags: ['SQL', 'Dashboards', 'Forecasting'],
    featured: true,
    postedAt: '5 days ago',
    description: 'Use funnel data and labor signals to improve matching quality and hiring outcomes.',
    responsibilities: [
      'Analyze job performance and candidate engagement trends.',
      'Create dashboards that guide marketplace and recruiter decisions.',
      'Partner with PMs to define experiment success metrics.'
    ],
    requirements: [
      'Advanced SQL and analytics experience.',
      'Ability to explain findings to non-technical stakeholders.',
      'Strong experimentation and KPI design skills.'
    ],
    perks: ['Remote contract', 'Flexible hours', 'High-impact scope']
  },
  {
    id: 107,
    title: 'Customer Success Manager',
    company: 'TalentPulse',
    logoText: 'TP',
    location: 'Denver, CO',
    remoteMode: 'Hybrid',
    employmentType: 'Full-time',
    level: 'Mid',
    salaryRange: '$90k - $110k',
    tags: ['B2B SaaS', 'Onboarding', 'Retention'],
    featured: false,
    postedAt: '1 week ago',
    description: 'Help employers adopt the platform and reach hiring goals faster.',
    responsibilities: [
      'Lead onboarding and success planning for new employer accounts.',
      'Translate customer feedback into actionable product input.',
      'Track customer health and expansion opportunities.'
    ],
    requirements: [
      'Experience in SaaS customer success or account management.',
      'Strong communication and relationship building skills.',
      'Comfort with metrics and renewal planning.'
    ],
    perks: ['Bonus plan', 'Hybrid work', 'Professional coaching']
  },
  {
    id: 108,
    title: 'Growth Marketing Intern',
    company: 'PeakBridge',
    logoText: 'PB',
    location: 'Remote - US',
    remoteMode: 'Remote',
    employmentType: 'Internship',
    level: 'Entry',
    salaryRange: '$25/hr',
    tags: ['Content', 'Campaigns', 'Analytics'],
    featured: false,
    postedAt: '3 days ago',
    description: 'Support campaigns that grow job seeker and employer acquisition.',
    responsibilities: [
      'Assist with campaign reporting and landing page optimization.',
      'Draft content for product launches and acquisition programs.',
      'Analyze engagement trends and suggest test ideas.'
    ],
    requirements: [
      'Interest in SaaS growth marketing.',
      'Strong writing and organization skills.',
      'Comfort with spreadsheets and experimentation.'
    ],
    perks: ['Mentorship', 'Remote internship', 'Flexible schedule']
  }
];
