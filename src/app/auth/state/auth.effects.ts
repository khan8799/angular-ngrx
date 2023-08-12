import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { autoLoginStart, loginStart, loginSuccess, logoutStart, signupStart, signupSuccess } from "./auth.actions";
import { catchError, exhaustMap, finalize, map, of, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/shared/state/shared.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(
        private action$: Actions,
        private _authService: AuthService,
        private store: Store<AppState>,
        private router: Router,
    ) {}

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap(action => {
                return this._authService
                    .login({contact: action.contact, password: action.password})
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map((data) => {
                            this._authService.token = data.token;
                            return loginSuccess({user: data.user, canRedirect: true});
                        })
                    )
            }),
            catchError(error => {
                return of(setErrorMessage({message: error.error.message}));
            })
        )
    });

    loginRedirect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                action.canRedirect ? this.router.navigate(['/']) : '';
            })
        )
    }, {dispatch: false});

    signup$ = createEffect(() => {
        return this.action$.pipe(
            ofType(signupStart),
            exhaustMap(action => {
                const signupData = {...action};
                delete signupData.type;
                return this._authService
                    .signup(signupData)
                    .pipe(
                        finalize(() => this.store.dispatch(setLoadingSpinner({status: false}))),
                        map((data) => signupSuccess({user: data.payload}))
                    )
            }),
            catchError(error => {
                return of(setErrorMessage({message: error.error.message}));
            })
        )
    });

    signupRedirect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(signupSuccess),
            tap((action) => this.router.navigate(['/auth']))
        )
    }, {dispatch: false});

    autoLogin$ = createEffect(() => {
        return this.action$.pipe(
            ofType(autoLoginStart),
            exhaustMap(action => {
                return this._authService
                    .getUserInfo()
                    .pipe(
                        map((data) => loginSuccess({user: data.payload, canRedirect: false}))
                    )
            })
        )
    });

    autoLogout$ = createEffect(() => {
        return this.action$.pipe(
            ofType(logoutStart),
            map(action => {
                this._authService.logout();
                this.router.navigate(['/auth']);
            })
        )
    }, { dispatch: false});
}