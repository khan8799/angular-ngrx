import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category, CategoryPayload } from 'src/app/model/category.model';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { addCategory, updateCategory } from '../state/category.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getCategoryById } from '../state/category.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
  editForm!: FormGroup;
  category: Category;
  categorySubscription: Subscription;
  categoryId: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.activatedRoute
        .paramMap
        .subscribe(
          params => {
            this.categoryId = params.get('_id');
            this.getCategoryById();
          }
        )
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) this.categorySubscription.unsubscribe();
  }

  initializeForm(): void {
    this.editForm = this.fb.group({
      name: [null],
      description: [null],
    });
  }

  getCategoryById(): void {
    this.categorySubscription = this.store
        .select(getCategoryById, {_id: this.categoryId})
        .subscribe(
          res => {
            if (!res) {
              this.router.navigate(['/category']);
              return;
            }

            this.category = res;
            this.populateForm();
          }
        );
  }

  populateForm(): void {
    this.editForm.patchValue({
      name: this.category.name,
      description: this.category.description
    })
  }

  onSubmit(): void {
    const updateData: CategoryPayload = {
      _id: this.categoryId,
      name: this.editForm.value.name,
      description: this.editForm.value.description,
    }
    this.store.dispatch(updateCategory(updateData));
  }
}
