import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from 'app/ngrx/app.reducers';
import { Store } from '@ngrx/store';
import * as AuthActions from '../ngrx/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({email: email, password: password}));
  }

}
