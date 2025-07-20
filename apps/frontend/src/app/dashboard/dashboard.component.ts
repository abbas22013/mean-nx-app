import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Welcome to the Dashboard</h1>
    <p>This is your main dashboard page.</p>
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
  `]
})
export class DashboardComponent {}
