import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';
import { LoginPayload } from 'src/app/model/auth.model';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      contact: [],
      password: []
    });
  }

  onSubmit(): void {
    const loginData: LoginPayload = {
      contact: this.loginForm.value.contact,
      password: this.loginForm.value.password
    }
    this.loginForm.reset();
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(loginStart(loginData));
  }
}
