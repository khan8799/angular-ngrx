import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeCompanyName, customIncrement } from '../state/counter.action';
import { getCompanyName } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  companyName$!: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.companyName$! = this.store.select(getCompanyName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }

  onCompanyNameChange() {
    this.store.dispatch(changeCompanyName())
  }
}
