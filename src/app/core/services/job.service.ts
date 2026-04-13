import { Injectable, computed, signal } from '@angular/core';
import { MOCK_JOBS } from '../data/mock-jobs';
import { Job } from '../models/job.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  readonly jobs = signal<Job[]>(MOCK_JOBS);
  readonly featuredJobs = computed(() => this.jobs().filter((job) => job.featured));

  getJobById(id: number): Job | undefined {
    return this.jobs().find((job) => job.id === id);
  }
}
