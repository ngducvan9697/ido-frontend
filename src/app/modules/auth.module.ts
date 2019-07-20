import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { AuthTabsComponent } from './../components/auth-tabs/auth-tabs.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [AuthTabsComponent, LoginComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthModule {}
