import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function contentReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_VIDEOS_REQUEST:
      return {
        ...state,
        videos: {
          ...state.videos,
          error: null,
          isLoading: true
        }
      };
    case ActionTypes.LOAD_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: {
          data: action.payload.data,
          error: null,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_VIDEOS_FAILURE:
      return {
        ...state,
        videos: {
          data: null,
          error: action.payload.error,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_LIVE_STREAMS_REQUEST:
      return {
        ...state,
        liveStreams: {
          ...state.liveStreams,
          error: null,
          isLoading: true
        }
      };
    case ActionTypes.LOAD_LIVE_STREAMS_SUCCESS:
      return {
        ...state,
        liveStreams: {
          data: action.payload.data,
          error: null,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_LIVE_STREAMS_FAILURE:
      return {
        ...state,
        liveStreams: {
          data: null,
          error: action.payload.error,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_CHANNELS_REQUEST:
      return {
        ...state,
        channels: {
          ...state.channels,
          error: null,
          isLoading: true
        }
      };
    case ActionTypes.LOAD_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: {
          data: action.payload.data,
          error: null,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_CHANNELS_FAILURE:
      return {
        ...state,
        channels: {
          data: null,
          error: action.payload.error,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_SOURCE_SYSTEMS_REQUEST:
      return {
        ...state,
        sourceSystems: {
          ...state.sourceSystems,
          error: null,
          isLoading: true
        }
      };
    case ActionTypes.LOAD_SOURCE_SYSTEMS_SUCCESS:
      return {
        ...state,
        sourceSystems: {
          data: action.payload.data,
          error: null,
          isLoading: false
        }
      };
    case ActionTypes.LOAD_SOURCE_SYSTEMS_FAILURE:
      return {
        ...state,
        sourceSystems: {
          data: null,
          error: action.payload.error,
          isLoading: false
        }
      };
    default: {
      return state;
    }
  }
}
