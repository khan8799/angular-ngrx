import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CATEGORY_STATE_NAME } from './state/category.selector';
import { CategoryReducer } from './state/category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './state/category.effects';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: 'add',
    component: AddCategoryComponent
  },
  {
    path: 'edit/:_id',
    component: UpdateCategoryComponent
  }
]

@NgModule({
  declarations: [
    CategoryListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(CATEGORY_STATE_NAME, CategoryReducer),
    EffectsModule.forFeature([CategoryEffects])
  ]
})
export class CategoryModule { }
