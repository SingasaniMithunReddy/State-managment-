import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { JobService } from '../../core/services/job.service';
import { JobCardComponent } from '../../shared/components/job-card.component';

@Component({
  standalone: true,
  selector: 'app-jobs-page',
  imports: [JobCardComponent],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsPageComponent {
  private readonly jobService = inject(JobService);

  readonly search = signal('');
  readonly selectedType = signal('All');
  readonly selectedLocation = signal('All');
  readonly remoteOnly = signal(false);

  readonly jobs = this.jobService.jobs;
  readonly locations = computed(() => [
    'All',
    ...new Set(this.jobs().map((job) => job.location))
  ]);

  readonly filteredJobs = computed(() => {
    const query = this.search().trim().toLowerCase();
    const type = this.selectedType();
    const location = this.selectedLocation();
    const remoteOnly = this.remoteOnly();

    return this.jobs().filter((job) => {
      const matchesQuery =
        query.length === 0 ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesType = type === 'All' || job.employmentType === type;
      const matchesLocation = location === 'All' || job.location === location;
      const matchesRemote = !remoteOnly || job.remoteMode === 'Remote';

      return matchesQuery && matchesType && matchesLocation && matchesRemote;
    });
  });

  updateSearch(value: string): void {
    this.search.set(value);
  }

  updateType(value: string): void {
    this.selectedType.set(value);
  }

  updateLocation(value: string): void {
    this.selectedLocation.set(value);
  }

  toggleRemoteOnly(): void {
    this.remoteOnly.update((value) => !value);
  }
}
