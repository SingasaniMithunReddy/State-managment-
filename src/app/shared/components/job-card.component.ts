import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../core/models/job.model';
import { ApplicationService } from '../../core/services/application.service';
import { SavedJobsService } from '../../core/services/saved-jobs.service';

@Component({
  standalone: true,
  selector: 'app-job-card',
  imports: [RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardComponent {
  readonly job = input.required<Job>();
  readonly savedJobs = inject(SavedJobsService);
  readonly applications = inject(ApplicationService);

  toggleSaved(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.savedJobs.toggle(this.job().id);
  }

  quickApply(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.applications.apply(this.job().id);
  }
}
