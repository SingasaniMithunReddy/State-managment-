import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';
import { JobService } from '../../core/services/job.service';
import { ApplicationStatus } from '../../core/models/application.model';

@Component({
  standalone: true,
  selector: 'app-applications-page',
  imports: [RouterLink],
  templateUrl: './applications-page.component.html',
  styleUrl: './applications-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationsPageComponent {
  readonly applications = inject(ApplicationService);
  private readonly jobService = inject(JobService);

  readonly items = computed(() =>
    this.applications
      .applications()
      .map((application) => ({
        application,
        job: this.jobService.getJobById(application.jobId)
      }))
      .filter((item) => !!item.job)
  );

  statusClass(status: ApplicationStatus): string {
    return `status-${status.toLowerCase()}`;
  }
}
