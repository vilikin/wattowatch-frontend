import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, UserStoreSelectors } from '../root-store';
import {
  LoginRequestAction,
  LoginSuccessAction
} from '../root-store/user-store/actions';
import { Observable, of } from 'rxjs';
import { User } from '../models';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service/user.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  name = new FormControl('');
  user$!: Observable<User | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  isNameAvailable = false;

  constructor(
    private store: Store<RootStoreState.State>,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(UserStoreSelectors.selectUser);
    this.error$ = this.store.select(UserStoreSelectors.selectLoginError);
    this.isLoading$ = this.store.select(
      UserStoreSelectors.selectLoginIsLoading
    );

    this.user$.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/');
      }
    });

    this.name.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(text => {
          if (text.length > 2) {
            return this.userService.isUsernameAvailable(text);
          } else {
            return of(false);
          }
        })
      )
      .subscribe(isAvailable => {
        this.isNameAvailable = isAvailable;
      });
  }

  public login() {
    this.store.dispatch(new LoginRequestAction({ name: this.name.value }));
  }

  public async register() {
    try {
      const user = await this.userService
        .createUser(this.name.value)
        .toPromise();
      this.store.dispatch(new LoginSuccessAction({ user }));
    } catch (e) {
      console.error(e);
    }
  }
}
