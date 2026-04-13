import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobService } from '../../core/services/job.service';
import { SavedJobsService } from '../../core/services/saved-jobs.service';
import { JobCardComponent } from '../../shared/components/job-card.component';

@Component({
  standalone: true,
  selector: 'app-saved-jobs-page',
  imports: [RouterLink, JobCardComponent],
  templateUrl: './saved-jobs-page.component.html',
  styleUrl: './saved-jobs-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavedJobsPageComponent {
  private readonly jobService = inject(JobService);
  readonly savedJobsService = inject(SavedJobsService);

  readonly savedJobs = computed(() =>
    this.jobService.jobs().filter((job) => this.savedJobsService.savedJobIds().includes(job.id))
  );
}
