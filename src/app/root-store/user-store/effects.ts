import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, of as observableOf } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import { UserService } from '../../services/user-service/user.service';
import { RootStoreState } from '../index';
import * as UserStoreActions from './actions';
import { ContentStoreActions } from '../content-store';
import { selectUser } from './selectors';

@Injectable()
export class UserStoreEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<RootStoreState.State>
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.LoginRequestAction>(
      UserStoreActions.ActionTypes.LOGIN_REQUEST
    ),
    switchMap(action =>
      this.userService.login(action.payload.name).pipe(
        map(
          user =>
            new UserStoreActions.LoginSuccessAction({
              user
            })
        ),
        catchError(error =>
          observableOf(
            new UserStoreActions.LoginFailureAction({ error: error.message })
          )
        )
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccessPersistUserIdEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.LoginSuccessAction>(
      UserStoreActions.ActionTypes.LOGIN_SUCCESS
    ),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    })
  );

  @Effect()
  loginSuccessLoadVideosEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.LoginSuccessAction>(
      UserStoreActions.ActionTypes.LOGIN_SUCCESS
    ),
    switchMap(action =>
      observableOf(
        new ContentStoreActions.LoadVideosRequestAction({
          userId: action.payload.user.id
        })
      )
    )
  );

  @Effect()
  loginSuccessLoadLiveStreamsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.LoginSuccessAction>(
      UserStoreActions.ActionTypes.LOGIN_SUCCESS
    ),
    switchMap(action =>
      observableOf(
        new ContentStoreActions.LoadLiveStreamsRequestAction({
          userId: action.payload.user.id
        })
      )
    )
  );

  @Effect()
  loginSuccessLoadChannelsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.LoginSuccessAction>(
      UserStoreActions.ActionTypes.LOGIN_SUCCESS
    ),
    switchMap(action =>
      observableOf(
        new ContentStoreActions.LoadChannelsRequestAction({
          userId: action.payload.user.id
        })
      )
    )
  );

  @Effect()
  loginSuccessLoadSourceSystemsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.LoginSuccessAction>(
      UserStoreActions.ActionTypes.LOGIN_SUCCESS
    ),
    switchMap(action =>
      observableOf(new ContentStoreActions.LoadSourceSystemsRequestAction())
    )
  );

  @Effect()
  subscribeRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.SubscribeRequestAction>(
      UserStoreActions.ActionTypes.SUBSCRIBE_REQUEST
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) => {
      return this.userService
        .subscribeToChannel(
          user!.id,
          action.payload.sourceSystemId,
          action.payload.channelName
        )
        .pipe(
          map(success =>
            success
              ? new UserStoreActions.SubscribeSuccessAction()
              : new UserStoreActions.SubscribeFailureAction()
          )
        );
    })
  );

  @Effect()
  unsubscribeRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.UnsubscribeRequestAction>(
      UserStoreActions.ActionTypes.UNSUBSCRIBE_REQUEST
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) => {
      return this.userService
        .unsubscribeFromChannel(
          user!.id,
          action.payload.sourceSystemId,
          action.payload.channelName
        )
        .pipe(
          map(success =>
            success
              ? new UserStoreActions.UnsubscribeSuccessAction()
              : new UserStoreActions.UnsubscribeFailureAction()
          )
        );
    })
  );

  @Effect()
  subscribeSuccessLoadChannelsEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.SubscribeSuccessAction>(
      UserStoreActions.ActionTypes.SUBSCRIBE_SUCCESS
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) =>
      of(
        new ContentStoreActions.LoadChannelsRequestAction({
          userId: user!.id
        })
      )
    )
  );

  @Effect()
  subscribeSuccessLoadVideosEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.SubscribeSuccessAction>(
      UserStoreActions.ActionTypes.SUBSCRIBE_SUCCESS
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) =>
      of(
        new ContentStoreActions.LoadVideosRequestAction({
          userId: user!.id
        })
      )
    )
  );

  @Effect()
  subscribeSuccessLoadLiveStreamsEffect$: Observable<
    Action
  > = this.actions$.pipe(
    ofType<UserStoreActions.SubscribeSuccessAction>(
      UserStoreActions.ActionTypes.SUBSCRIBE_SUCCESS
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) =>
      of(
        new ContentStoreActions.LoadLiveStreamsRequestAction({
          userId: user!.id
        })
      )
    )
  );

  @Effect()
  unsubscribeSuccessLoadChannelsEffect$: Observable<
    Action
  > = this.actions$.pipe(
    ofType<UserStoreActions.UnsubscribeSuccessAction>(
      UserStoreActions.ActionTypes.UNSUBSCRIBE_SUCCESS
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) =>
      of(
        new ContentStoreActions.LoadChannelsRequestAction({
          userId: user!.id
        })
      )
    )
  );

  @Effect()
  unsubscribeSuccessLoadVideosEffect$: Observable<Action> = this.actions$.pipe(
    ofType<UserStoreActions.UnsubscribeSuccessAction>(
      UserStoreActions.ActionTypes.UNSUBSCRIBE_SUCCESS
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) =>
      of(
        new ContentStoreActions.LoadVideosRequestAction({
          userId: user!.id
        })
      )
    )
  );

  @Effect()
  unsubscribeSuccessLoadLiveStreamsEffect$: Observable<
    Action
  > = this.actions$.pipe(
    ofType<UserStoreActions.UnsubscribeSuccessAction>(
      UserStoreActions.ActionTypes.UNSUBSCRIBE_SUCCESS
    ),
    withLatestFrom(this.store.select(selectUser)),
    switchMap(([action, user]) =>
      of(
        new ContentStoreActions.LoadLiveStreamsRequestAction({
          userId: user!.id
        })
      )
    )
  );
}
