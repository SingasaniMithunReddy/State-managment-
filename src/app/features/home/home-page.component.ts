import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobService } from '../../core/services/job.service';
import { JobCardComponent } from '../../shared/components/job-card.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [RouterLink, JobCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  private readonly jobService = inject(JobService);
  readonly featuredJobs = computed(() => this.jobService.featuredJobs().slice(0, 3));
  readonly stats = [
    { value: '12k+', label: 'monthly job matches' },
    { value: '2.1x', label: 'faster shortlist review' },
    { value: '84%', label: 'candidate completion rate' }
  ];
}
