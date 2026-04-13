export interface Job {
  id: number;
  title: string;
  company: string;
  logoText: string;
  location: string;
  remoteMode: 'Remote' | 'Hybrid' | 'On-site';
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  level: 'Entry' | 'Mid' | 'Senior' | 'Lead';
  salaryRange: string;
  tags: string[];
  featured: boolean;
  postedAt: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}
