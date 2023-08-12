import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoryPayload } from 'src/app/model/category.model';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { addCategory } from '../state/category.actions';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      name: [null],
      description: [null],
    });
  }

  onSubmit(): void {
    const addData: CategoryPayload = {
      name: this.addForm.value.name,
      description: this.addForm.value.description,
    }
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(addCategory(addData));
  }
}
