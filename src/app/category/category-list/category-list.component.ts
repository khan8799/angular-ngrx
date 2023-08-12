import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { AppState } from 'src/app/store/app.state';
import { getCategories } from '../state/category.selector';
import { deleteCategory, loadCategory } from '../state/category.actions';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  category$!: Observable<Category[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.category$ = this.store.select(getCategories);
    this.store.dispatch(loadCategory())
  }

  onDelete(_id: string) {
    this.store.dispatch(deleteCategory({_id}))
  }
}
