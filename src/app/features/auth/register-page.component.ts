import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register-page',
  imports: [RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
  readonly submitted = signal(false);

  submit(): void {
    this.submitted.set(true);
  }
}
