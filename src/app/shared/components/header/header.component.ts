import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  isAuthenticated$: Observable<boolean>;
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

  constructor(
  ) {}
  
  ngOnInit(): void {
  }

  onLogout(): void {
  }
}
