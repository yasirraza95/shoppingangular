import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
    }),
  };

  constructor(private http: HttpClient) {}

  getProfile() {
    //FIXME token + login user
    return this.http.get<User>(
      environment.API_URL + '/user/profile/' + environment.user,
      this.httpOptions
    );
  }
}
