import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router)
  return authService.isLoggedIn$.pipe(
    switchMap(isLoggedIn => {
      return isLoggedIn ? of(true) : of(false);
    })
  );
};

export const authGuardChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router)
  return authService.isLoggedIn$.pipe(
    switchMap(isLoggedIn => {
      return isLoggedIn ? of(true) : router.navigate(['/category']);
    })
  );
};
