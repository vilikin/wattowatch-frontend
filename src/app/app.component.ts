import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, UserStoreSelectors } from './root-store';
import { Observable } from 'rxjs';
import { User } from './models';
import {
  LoginSuccessAction,
  LogoutAction
} from './root-store/user-store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;

  constructor(
    private store: Store<RootStoreState.State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(UserStoreSelectors.selectUser);

    this.user$.subscribe(user => {
      const userRawDataFromLocalStorage = localStorage.getItem('user');

      if (!user && userRawDataFromLocalStorage) {
        const userData = JSON.parse(userRawDataFromLocalStorage) as User;
        this.store.dispatch(new LoginSuccessAction({ user: userData }));
      }

      if (!user && this.router.url !== '/login') {
        this.router.navigateByUrl('/login');
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.store.dispatch(new LogoutAction());
  }
}
