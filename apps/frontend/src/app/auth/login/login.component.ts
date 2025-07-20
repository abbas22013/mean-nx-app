import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="login()">
      <input
        type="email"
        [(ngModel)]="email"
        name="email"
        required
        placeholder="Email"
      />
      <input
        type="password"
        [(ngModel)]="password"
        name="password"
        required
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
    <p>{{ error }}</p>
  `,
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err: any) =>
        (this.error = err?.error?.message || 'Login failed'),
    });
  }
}
