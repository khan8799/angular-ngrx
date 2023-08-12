import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignupPayload } from 'src/app/model/auth.model';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { signupStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupForm = this.fb.group({
      firstName: [null],
      lastName: [null],
      email: [null],
      contact: [null],
      gender: ['male'],
      password: [null]
    });
  }

  onSubmit(): void {
    const signupData: SignupPayload = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      contact: +this.signupForm.value.contact,
      gender: this.signupForm.value.gender,
      role: 'admin',
      password: this.signupForm.value.password,
    }
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(signupStart(signupData));
  }
}
