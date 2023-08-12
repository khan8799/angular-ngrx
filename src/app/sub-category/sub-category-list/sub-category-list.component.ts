import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SubCategory } from 'src/app/model/sub-category.model';
import { AppState } from 'src/app/store/app.state';
import { getSubCategories } from '../state/sub-category.selector';
import { loadSubCategory } from '../state/sub-category.actions';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit {
  subCategory$!: Observable<SubCategory[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subCategory$ = this.store.select(getSubCategories);
    this.store.dispatch(loadSubCategory())
  }

  onDelete(_id: string) {
    // this.store.dispatch(deleteCategory({_id}))
  }
}
