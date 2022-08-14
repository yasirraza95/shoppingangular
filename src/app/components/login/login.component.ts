import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/interfaces/user-data';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, UserData {
  isLoggedIn;
  cart =  0;
  wishlist =  0;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loading = false;
  submitted = false;
  showSuccessMessage: boolean = false;
  errorMsg: string = '';
  returnUrl: string = '';
  roles: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.tokenService.getToken() !== null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.tokenService.getToken() != null) {
      this.roles = this.tokenService.getUser().roles;
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const { username, password } = this.form.value;

    this.loginService.login(username, password).subscribe({
      next: (data: any) => {
        this.tokenService.saveToken(data['token']);
        this.tokenService.saveUser(data['data']);
        this.roles = this.tokenService.getUser().roles;
        this.isLoggedIn = true;
        window.location.reload();
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        this.errorMsg = error.error.message;
      },
    });
  }
}
