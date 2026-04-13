import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Job } from '../../core/models/job.model';
import { ApplicationService } from '../../core/services/application.service';
import { JobService } from '../../core/services/job.service';
import { SavedJobsService } from '../../core/services/saved-jobs.service';

@Component({
  standalone: true,
  selector: 'app-job-detail-page',
  imports: [RouterLink],
  templateUrl: './job-detail-page.component.html',
  styleUrl: './job-detail-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  readonly savedJobs = inject(SavedJobsService);
  readonly applications = inject(ApplicationService);
  private readonly jobService = inject(JobService);

  readonly job = signal<Job | null>(null);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = Number(params.get('id'));
      this.job.set(this.jobService.getJobById(id) ?? null);
    });
  }

  toggleSaved(): void {
    const currentJob = this.job();
    if (!currentJob) {
      return;
    }

    this.savedJobs.toggle(currentJob.id);
  }

  apply(): void {
    const currentJob = this.job();
    if (!currentJob) {
      return;
    }

    this.applications.apply(currentJob.id);
  }
}
