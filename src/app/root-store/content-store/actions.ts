import { Action } from '@ngrx/store';
import { Channel, LiveStream, SourceSystem, Video } from '../../models';

export enum ActionTypes {
  LOAD_VIDEOS_REQUEST = '[Content] Load Videos Request',
  LOAD_VIDEOS_SUCCESS = '[Content] Load Videos Success',
  LOAD_VIDEOS_FAILURE = '[Content] Load Videos Failure',
  LOAD_LIVE_STREAMS_REQUEST = '[Content] Load Live Streams Request',
  LOAD_LIVE_STREAMS_SUCCESS = '[Content] Load Live Streams Success',
  LOAD_LIVE_STREAMS_FAILURE = '[Content] Load Live Streams Failure',
  LOAD_CHANNELS_REQUEST = '[Content] Load Channels Request',
  LOAD_CHANNELS_SUCCESS = '[Content] Load Channels Success',
  LOAD_CHANNELS_FAILURE = '[Content] Load Channels Failure',
  LOAD_SOURCE_SYSTEMS_REQUEST = '[Content] Load Source Systems Request',
  LOAD_SOURCE_SYSTEMS_SUCCESS = '[Content] Load Source Systems Success',
  LOAD_SOURCE_SYSTEMS_FAILURE = '[Content] Load Source Systems Failure'
}

export class LoadVideosRequestAction implements Action {
  readonly type = ActionTypes.LOAD_VIDEOS_REQUEST;
  constructor(public payload: { userId: number }) {}
}

export class LoadVideosFailureAction implements Action {
  readonly type = ActionTypes.LOAD_VIDEOS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadVideosSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_VIDEOS_SUCCESS;
  constructor(public payload: { data: Video[] }) {}
}

export class LoadLiveStreamsRequestAction implements Action {
  readonly type = ActionTypes.LOAD_LIVE_STREAMS_REQUEST;
  constructor(public payload: { userId: number }) {}
}

export class LoadLiveStreamsFailureAction implements Action {
  readonly type = ActionTypes.LOAD_LIVE_STREAMS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadLiveStreamsSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_LIVE_STREAMS_SUCCESS;
  constructor(public payload: { data: LiveStream[] }) {}
}

export class LoadChannelsRequestAction implements Action {
  readonly type = ActionTypes.LOAD_CHANNELS_REQUEST;
  constructor(public payload: { userId: number }) {}
}

export class LoadChannelsFailureAction implements Action {
  readonly type = ActionTypes.LOAD_CHANNELS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadChannelsSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_CHANNELS_SUCCESS;
  constructor(public payload: { data: Channel[] }) {}
}

export class LoadSourceSystemsRequestAction implements Action {
  readonly type = ActionTypes.LOAD_SOURCE_SYSTEMS_REQUEST;
  constructor() {}
}

export class LoadSourceSystemsFailureAction implements Action {
  readonly type = ActionTypes.LOAD_SOURCE_SYSTEMS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSourceSystemsSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SOURCE_SYSTEMS_SUCCESS;
  constructor(public payload: { data: SourceSystem[] }) {}
}

export type Actions =
  | LoadVideosRequestAction
  | LoadVideosFailureAction
  | LoadVideosSuccessAction
  | LoadLiveStreamsRequestAction
  | LoadLiveStreamsFailureAction
  | LoadLiveStreamsSuccessAction
  | LoadChannelsRequestAction
  | LoadChannelsFailureAction
  | LoadChannelsSuccessAction
  | LoadSourceSystemsRequestAction
  | LoadSourceSystemsFailureAction
  | LoadSourceSystemsSuccessAction;
