import { Injectable, computed, signal } from '@angular/core';
import { ApplicationStatus, JobApplication } from '../models/application.model';

const STORAGE_KEY = 'hirejob.applications';
const STATUS_FLOW: ApplicationStatus[] = ['Applied', 'Reviewing', 'Interview', 'Offer', 'Rejected'];

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  readonly applications = signal<JobApplication[]>(this.read());
  readonly count = computed(() => this.applications().length);
  readonly interviewsCount = computed(
    () => this.applications().filter((item) => item.status === 'Interview').length
  );

  hasApplied(jobId: number): boolean {
    return this.applications().some((item) => item.jobId === jobId);
  }

  apply(jobId: number): void {
    if (this.hasApplied(jobId)) {
      return;
    }

    const next = [
      {
        jobId,
        status: 'Applied' as const,
        appliedAt: new Date().toISOString()
      },
      ...this.applications()
    ];

    this.applications.set(next);
    this.write(next);
  }

  advance(jobId: number): void {
    const next = this.applications().map((item) => {
      if (item.jobId !== jobId) {
        return item;
      }

      const currentIndex = STATUS_FLOW.indexOf(item.status);
      const status = STATUS_FLOW[Math.min(currentIndex + 1, STATUS_FLOW.length - 1)];
      return { ...item, status };
    });

    this.applications.set(next);
    this.write(next);
  }

  remove(jobId: number): void {
    const next = this.applications().filter((item) => item.jobId !== jobId);
    this.applications.set(next);
    this.write(next);
  }

  private read(): JobApplication[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as JobApplication[] : [];
  }

  private write(items: JobApplication[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
}
