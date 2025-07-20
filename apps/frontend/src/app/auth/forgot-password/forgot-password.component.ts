import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="submit()">
      <input
        type="email"
        [(ngModel)]="email"
        name="email"
        required
        placeholder="Enter your email"
      />
      <button type="submit">Send Reset Link</button>
    </form>
    <p>{{ message }}</p>
  `,
})
export class ForgotPasswordComponent {
  email = '';
  message = '';

  constructor(private auth: AuthService) {}

  submit() {
    this.auth.forgotPassword(this.email).subscribe({
      next: () => (this.message = 'Password reset link sent to your email'),
      error: (err: any) =>
        (this.message = err?.error?.message || 'Failed to send reset link'),
    });
  }
}
