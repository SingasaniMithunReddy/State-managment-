export type ApplicationStatus = 'Applied' | 'Reviewing' | 'Interview' | 'Offer' | 'Rejected';

export interface JobApplication {
  jobId: number;
  status: ApplicationStatus;
  appliedAt: string;
}
