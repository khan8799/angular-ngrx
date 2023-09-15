import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubCategoryService } from '../services/sub-category.service';
import { SubCategory } from '../models/Sub-Category';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit, OnDestroy {
  // @ViewChild('title') headerTitle: ElementRef;

  subCategories: SubCategory[] = [];
  searchText: string = '';
  isChildActivated: boolean = false;
  routeSubscription: Subscription;

  constructor(
    private router: Router,
    private _subCategoryService: SubCategoryService
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.router
        .events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(
          (res: NavigationEnd) => {
            console.log(res);
            
            this.isChildActivated = res.url.includes('add') || res.url.includes('edit') ? true : false;
          }
        )
    this.subCategories = this._subCategoryService.list();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  onSearch() {
    // (this.headerTitle.nativeElement as HTMLElement).style.color = 'red';
  }
  
}
