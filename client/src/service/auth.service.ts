import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users/auth`, {
      email,
      password,
    });
  }
  register(
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    password: string
  ) {
    return this.http.post(`${environment.apiUrl}/users/create-user`, {
      firstName,
      lastName,
      email,
      role,
      password,
    });
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== undefined && token !== null;
  }
}
