import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { UpdateSubCategoryComponent } from './update-sub-category/update-sub-category.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SUB_CATEGORY_STATE_NAME } from './state/sub-category.selector';
import { SubCategoryReducer } from './state/sub-category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SubCategoryEffect } from './state/sub-category.effects';

const routes: Routes = [
  {
    path: '',
    component: SubCategoryListComponent
  },
  {
    path: 'add',
    component: AddSubCategoryComponent
  },
  {
    path: 'edit/:_id',
    component: UpdateSubCategoryComponent
  }
]

@NgModule({
  declarations: [
    SubCategoryListComponent,
    AddSubCategoryComponent,
    UpdateSubCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(SUB_CATEGORY_STATE_NAME, SubCategoryReducer),
    EffectsModule.forFeature([SubCategoryEffect])
  ]
})
export class SubCategoryModule { }
