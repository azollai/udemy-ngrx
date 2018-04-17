import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import * as fromApp from '../ngrx/app.reducers';
import * as fromAuth from './ngrx/auth.reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map(
        (authState: fromAuth.State) => {
          return authState.authenticated;
        });
  }
}
