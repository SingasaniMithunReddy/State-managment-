import { Injectable, computed, signal } from '@angular/core';

const STORAGE_KEY = 'hirejob.savedJobs';

@Injectable({ providedIn: 'root' })
export class SavedJobsService {
  readonly savedJobIds = signal<number[]>(this.read());
  readonly count = computed(() => this.savedJobIds().length);

  isSaved(jobId: number): boolean {
    return this.savedJobIds().includes(jobId);
  }

  toggle(jobId: number): void {
    const next = this.isSaved(jobId)
      ? this.savedJobIds().filter((id) => id !== jobId)
      : [...this.savedJobIds(), jobId];

    this.savedJobIds.set(next);
    this.write(next);
  }

  private read(): number[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as number[] : [];
  }

  private write(jobIds: number[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobIds));
  }
}
