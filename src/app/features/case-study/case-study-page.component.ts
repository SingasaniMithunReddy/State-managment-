import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-case-study-page',
  imports: [RouterLink],
  templateUrl: './case-study-page.component.html',
  styleUrl: './case-study-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseStudyPageComponent {}
