import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { TokenService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  });

  loading = false;
  submitted = false;
  successMsg: string = '';
  errorMsg: string = '';
  returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private tokenService: TokenService,
    private router: Router
  ) {
    if (this.tokenService.getToken() !== null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const { username, email, name, phone, password } = this.form.value;

    this.signupService
      .signup(name, username, email, phone, password)
      .subscribe({
        next: (data: any) => {
          this.successMsg = data['message'];
          this.errorMsg = '';
        },
        error: (error: any) => {
          this.errorMsg = error.error.message;
          this.successMsg = '';
        },
      });
  }
}
