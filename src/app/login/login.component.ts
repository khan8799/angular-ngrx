import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      contact: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login() {
    console.log(this.loginForm.value);
  }

}
