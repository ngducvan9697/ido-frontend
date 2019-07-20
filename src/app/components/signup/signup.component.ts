import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
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
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      repassword: ['', Validators.required]
    });
  }

  signupUser() {
    this.spinerInterminate = false;
    console.log(this.signupForm.value);

    this.authService.registerUser(this.signupForm.value).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.signupForm.reset();
        this.spinerInterminate = true;
        setTimeout(() => {
          this.router.navigate(['streams']);
        }, 3000);
      },
      err => {
        console.log(err);
        if (err.error.msg) {
          this.errorMessage = err.error.msg[0].message;
        }
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
