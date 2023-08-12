import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './shared/state/shared.selector';
import Swal from 'sweetalert2';
import { autoLoginStart } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [ ],
  template: '',
})
export class AppComponent implements OnInit, OnDestroy {
  showLoading$: Observable<boolean>;
  errorMessageSubscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(autoLoginStart());
    this.showLoading$ = this.store.select(getLoading);

    this.errorMessageSubscription = this.store
        .select(getErrorMessage)
        .subscribe(
          res => {
            if (res) this.showSweetAlert({
              title: 'Error',
              text: res,
              icon: 'error'
            });
          }
        );
  }

  ngOnDestroy(): void {
    if (this.errorMessageSubscription) this.errorMessageSubscription.unsubscribe();
  }

  showSweetAlert(data) {
    Swal.fire({
      title: data.title,
      text: data.text,
      icon: data.icon,
      confirmButtonText: 'Ok'
    });
  }
}
