import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-employers-page',
  imports: [RouterLink],
  templateUrl: './employers-page.component.html',
  styleUrl: './employers-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployersPageComponent {
  readonly plans = [
    {
      name: 'Starter',
      price: '$149/mo',
      items: ['Up to 5 active jobs', 'Basic applicant tracking', 'Email support']
    },
    {
      name: 'Growth',
      price: '$399/mo',
      items: ['Unlimited roles', 'Team collaboration', 'Priority support']
    },
    {
      name: 'Scale',
      price: 'Custom',
      items: ['Dedicated onboarding', 'Custom workflows', 'Advanced analytics']
    }
  ];
}
