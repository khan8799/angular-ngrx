import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, LoginPayload, LoginResponse, SignupPayload } from '../model/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(data: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`admin/login`, data);
  }

  signup(data: SignupPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`admin`, data);
  }

  getUserInfo(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`admin/getBasicinfo`);
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
