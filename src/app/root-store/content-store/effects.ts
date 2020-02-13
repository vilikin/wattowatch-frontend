import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as contentActions from './actions';
import { ContentService } from '../../services/content-service/content.service';

@Injectable()
export class ContentStoreEffects {
  constructor(
    private contentService: ContentService,
    private actions$: Actions
  ) {}

  @Effect()
  loadVideosRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<contentActions.LoadVideosRequestAction>(
      contentActions.ActionTypes.LOAD_VIDEOS_REQUEST
    ),
    switchMap(action =>
      this.contentService.getLatestVideosForUser(action.payload.userId).pipe(
        map(
          videos =>
            new contentActions.LoadVideosSuccessAction({
              data: videos
            })
        ),
        catchError(error =>
          observableOf(
            new contentActions.LoadVideosFailureAction({ error: error.message })
          )
        )
      )
    )
  );

  @Effect()
  loadLiveStreamsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<contentActions.LoadLiveStreamsRequestAction>(
      contentActions.ActionTypes.LOAD_LIVE_STREAMS_REQUEST
    ),
    switchMap(action =>
      this.contentService.getLiveStreamsForUser(action.payload.userId).pipe(
        map(
          liveStreams =>
            new contentActions.LoadLiveStreamsSuccessAction({
              data: liveStreams
            })
        ),
        catchError(error =>
          observableOf(
            new contentActions.LoadLiveStreamsFailureAction({
              error: error.message
            })
          )
        )
      )
    )
  );

  @Effect()
  loadChannelsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<contentActions.LoadChannelsRequestAction>(
      contentActions.ActionTypes.LOAD_CHANNELS_REQUEST
    ),
    switchMap(action =>
      this.contentService
        .getChannelsUserIsSubscribedTo(action.payload.userId)
        .pipe(
          map(
            channels =>
              new contentActions.LoadChannelsSuccessAction({
                data: channels
              })
          ),
          catchError(error =>
            observableOf(
              new contentActions.LoadChannelsFailureAction({
                error: error.message
              })
            )
          )
        )
    )
  );

  @Effect()
  loadSourceSystemsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<contentActions.LoadSourceSystemsRequestAction>(
      contentActions.ActionTypes.LOAD_SOURCE_SYSTEMS_REQUEST
    ),
    switchMap(action =>
      this.contentService.getSourceSystems().pipe(
        map(
          sourceSystems =>
            new contentActions.LoadSourceSystemsSuccessAction({
              data: sourceSystems
            })
        ),
        catchError(error =>
          observableOf(
            new contentActions.LoadSourceSystemsFailureAction({
              error: error.message
            })
          )
        )
      )
    )
  );
}
