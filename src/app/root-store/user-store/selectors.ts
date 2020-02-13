import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { User } from '../../models';

import { State, SubscribeActionStatus, UnsubscribeActionStatus } from './state';
import { RootStoreState } from '../index';

const getError = (state: State): string | null => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): User | null => state.user;

const getSubscribeActionStatus = (state: State): SubscribeActionStatus =>
  state.actionStatuses.subscribe;

const getUnsubscribeActionStatus = (state: State): UnsubscribeActionStatus =>
  state.actionStatuses.unsubscribe;

export const selectUserState: MemoizedSelector<
  RootStoreState.State,
  State
> = createFeatureSelector<State>('user');

export const selectLoginError: MemoizedSelector<
  RootStoreState.State,
  string | null
> = createSelector(selectUserState, getError);

export const selectLoginIsLoading: MemoizedSelector<
  RootStoreState.State,
  boolean
> = createSelector(selectUserState, getIsLoading);

export const selectUser: MemoizedSelector<
  RootStoreState.State,
  User | null
> = createSelector(selectUserState, getUser);

export const selectSubscribeActionStatus: MemoizedSelector<
  RootStoreState.State,
  SubscribeActionStatus
> = createSelector(selectUserState, getSubscribeActionStatus);

export const selectUnsubscribeActionStatus: MemoizedSelector<
  RootStoreState.State,
  UnsubscribeActionStatus
> = createSelector(selectUserState, getUnsubscribeActionStatus);
