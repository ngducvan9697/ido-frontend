import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  spinerInterminate: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.init();
  }
  init() {
    const token = this.tokenService.getToken();
    if (token) {
      this.router.navigate(['streams']);
    }
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginUser() {
    this.spinerInterminate = false;
    this.authService.loginUser(this.loginForm.value).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.loginForm.reset();
        this.spinerInterminate = true;
        setTimeout(() => {
          this.router.navigate(['streams']);
        }, 1000);
      },
      err => {
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
