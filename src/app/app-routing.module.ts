import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddSubCategoryComponent } from './sub-category/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './sub-category/edit-sub-category/edit-sub-category.component';
import { authGuard, authGuardChild } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sub-category',
    pathMatch: 'full'
  },
  {
    path: 'sub-category',
    component: SubCategoryComponent,
    // canActivate: [authGuard],
    canActivateChild: [authGuardChild],
    children: [
      {
        path: 'add',
        component: AddSubCategoryComponent
      },
      {
        path: 'edit/:id',
        component: EditSubCategoryComponent
      }
    ]
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
