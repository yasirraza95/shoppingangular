import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { TokenService } from './token-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    }),
  };

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getProfile() {
    return this.http.get<User>(
      environment.API_URL +
        '/user/profile/' +
        this.tokenService.getUser().userId,
      this.httpOptions
    );
  }
}
