import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  template: `
    <form (ngSubmit)="register()">
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
      <button type="submit">Register</button>
    </form>
    <p>{{ error }}</p>
  `,
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register({ email: this.email, password: this.password }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err: any) =>
        (this.error = err?.error?.message || 'Registration failed'),
    });
  }
}
