import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  template: `
    <form (ngSubmit)="reset()">
      <input
        type="password"
        [(ngModel)]="newPassword"
        name="newPassword"
        required
        placeholder="New Password"
      />
      <button type="submit">Reset Password</button>
    </form>
    <p>{{ message }}</p>
  `,
})
export class ResetPasswordComponent {
  newPassword = '';
  message = '';
  token: string;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  reset() {
    this.auth.resetPassword(this.token, this.newPassword).subscribe({
      next: () => {
        this.message = 'Password reset successful';
        this.router.navigate(['/login']);
      },
      error: (err) =>
        (this.message = err.error?.message || 'Reset failed'),
    });
  }
}
