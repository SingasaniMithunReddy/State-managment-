import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';
import { JobService } from '../../core/services/job.service';
import { SavedJobsService } from '../../core/services/saved-jobs.service';

@Component({
  standalone: true,
  selector: 'app-dashboard-page',
  imports: [RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {
  private readonly jobService = inject(JobService);
  readonly savedJobs = inject(SavedJobsService);
  readonly applications = inject(ApplicationService);

  readonly summaryCards = computed(() => [
    { label: 'Open roles', value: this.jobService.jobs().length },
    { label: 'Featured jobs', value: this.jobService.featuredJobs().length },
    { label: 'Saved jobs', value: this.savedJobs.count() },
    { label: 'Applications', value: this.applications.count() }
  ]);

  readonly pipeline = computed(() => {
    const applications = this.applications.applications();
    return [
      { label: 'Applied', value: applications.filter((item) => item.status === 'Applied').length },
      { label: 'Reviewing', value: applications.filter((item) => item.status === 'Reviewing').length },
      { label: 'Interview', value: applications.filter((item) => item.status === 'Interview').length },
      { label: 'Offer', value: applications.filter((item) => item.status === 'Offer').length }
    ];
  });

  readonly maxPipeline = computed(() => Math.max(1, ...this.pipeline().map((item) => item.value)));
  readonly recentJobs = computed(() => this.jobService.jobs().slice(0, 5));
}
