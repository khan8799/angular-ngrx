import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category, CategoryPayload } from 'src/app/model/category.model';
import { AppState } from 'src/app/store/app.state';
import { updateCategory } from '../state/category.actions';
import { getCategoryById } from '../state/category.selector';
import { Subscription } from 'rxjs';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  category: Category;
  categorySubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getCategoryById();
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
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.categorySubscription = this.store
        .select(getCategoryById)
        .subscribe(
          res => {
            if (!res) return;

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
      _id: this.category._id,
      name: this.editForm.value.name,
      description: this.editForm.value.description,
    }
    this.store.dispatch(updateCategory(updateData));
  }
}
