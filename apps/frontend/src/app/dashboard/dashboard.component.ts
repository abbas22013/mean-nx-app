import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Welcome to the Dashboard</h1>
    <p>This is your main dashboard page.</p>
    <button (click)="logout()">Sign Out</button>
  `,
  styles: [`
    h1 {
      color: #2c3e50;
      font-family: Arial, sans-serif;
    }
    p {
      font-size: 16px;
      color: #34495e;
    }
    button {
      margin-top: 20px;
      padding: 10px 15px;
      background-color: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #c0392b;
    }
  `]
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();             
    this.router.navigate(['/login']); 
  }
}
