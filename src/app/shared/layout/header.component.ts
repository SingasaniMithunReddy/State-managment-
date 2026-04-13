import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';
import { SavedJobsService } from '../../core/services/saved-jobs.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly savedJobs = inject(SavedJobsService);
  readonly applications = inject(ApplicationService);
}
