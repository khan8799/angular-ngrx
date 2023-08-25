import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

interface Menus {
  text: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: Menus[] = [
    {
      text: 'Sub Category',
      path: 'sub-category'
    },
    {
      text: 'Category',
      path: 'category'
    },
    {
      text: 'Product',
      path: 'product'
    }
  ];
  isLoggedIn$: Observable<boolean>;

  constructor(
    private _authService: AuthService
  ) {}
  
  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggedIn$;
  }

  login(): void {
    this._authService.login();
  }

  logout(): void {
    this._authService.logout();
  }
}
