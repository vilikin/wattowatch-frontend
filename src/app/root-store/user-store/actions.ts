import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum ActionTypes {
  LOGIN_REQUEST = '[User] Login Request',
  LOGIN_FAILURE = '[User] Login Failure',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGOUT = '[User] Logout',
  SUBSCRIBE_REQUEST = '[User] Subscribe Request',
  SUBSCRIBE_FAILURE = '[User] Subscribe Failure',
  SUBSCRIBE_SUCCESS = '[User] Subscribe Success',
  UNSUBSCRIBE_REQUEST = '[User] Unsubscribe Request',
  UNSUBSCRIBE_FAILURE = '[User] Unsubscribe Failure',
  UNSUBSCRIBE_SUCCESS = '[User] Unsubscribe Success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { name: string }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export class SubscribeRequestAction implements Action {
  readonly type = ActionTypes.SUBSCRIBE_REQUEST;
  constructor(
    public payload: { channelName: string; sourceSystemId: string }
  ) {}
}

export class SubscribeFailureAction implements Action {
  readonly type = ActionTypes.SUBSCRIBE_FAILURE;
}

export class SubscribeSuccessAction implements Action {
  readonly type = ActionTypes.SUBSCRIBE_SUCCESS;
}

export class UnsubscribeRequestAction implements Action {
  readonly type = ActionTypes.UNSUBSCRIBE_REQUEST;
  constructor(
    public payload: { channelName: string; sourceSystemId: string }
  ) {}
}

export class UnsubscribeFailureAction implements Action {
  readonly type = ActionTypes.UNSUBSCRIBE_FAILURE;
}

export class UnsubscribeSuccessAction implements Action {
  readonly type = ActionTypes.UNSUBSCRIBE_SUCCESS;
}

export type Actions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | LogoutAction
  | SubscribeRequestAction
  | SubscribeFailureAction
  | SubscribeSuccessAction
  | UnsubscribeRequestAction
  | UnsubscribeFailureAction
  | UnsubscribeSuccessAction;
