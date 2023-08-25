import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(): void {
    this.isLoggedIn$.next(true);
  }

  logout(): void {
    this.isLoggedIn$.next(false);
  }
}
