import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module'; 


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    // هنا فقط المكونات العادية (غير المستقلة)
    // إذا كانت المكونات كلها standalone، يمكن تركها فارغة
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,

    
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  bootstrap: [DashboardComponent],  
})
export class AppModule {}
