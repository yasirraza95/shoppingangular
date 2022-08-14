import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

  signup(
    name: string,
    username: string,
    email: string,
    phone: string,
    password: string
  ) {
    return this.http.post<User>(environment.API_URL + '/user/signup', {
      name,
      username,
      email,
      phone,
      password,
    });
  }
}
