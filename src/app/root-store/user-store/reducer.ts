import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function userReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoading: false
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null
      };
    case ActionTypes.SUBSCRIBE_REQUEST:
      return {
        ...state,
        actionStatuses: {
          ...state.actionStatuses,
          subscribe: {
            toChannel: action.payload.channelName,
            success: null,
            loading: true
          }
        }
      };
    case ActionTypes.SUBSCRIBE_FAILURE:
      return {
        ...state,
        actionStatuses: {
          ...state.actionStatuses,
          subscribe: {
            toChannel: state.actionStatuses.subscribe.toChannel,
            success: false,
            loading: false
          }
        }
      };
    case ActionTypes.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        actionStatuses: {
          ...state.actionStatuses,
          subscribe: {
            toChannel: state.actionStatuses.subscribe.toChannel,
            success: true,
            loading: false
          }
        }
      };
    case ActionTypes.UNSUBSCRIBE_REQUEST:
      return {
        ...state,
        actionStatuses: {
          ...state.actionStatuses,
          unsubscribe: {
            fromChannel: action.payload.channelName,
            success: null,
            loading: true
          }
        }
      };
    case ActionTypes.UNSUBSCRIBE_FAILURE:
      return {
        ...state,
        actionStatuses: {
          ...state.actionStatuses,
          unsubscribe: {
            fromChannel: state.actionStatuses.unsubscribe.fromChannel,
            success: false,
            loading: false
          }
        }
      };
    case ActionTypes.UNSUBSCRIBE_SUCCESS:
      return {
        ...state,
        actionStatuses: {
          ...state.actionStatuses,
          unsubscribe: {
            fromChannel: state.actionStatuses.unsubscribe.fromChannel,
            success: true,
            loading: false
          }
        }
      };
    default: {
      return state;
    }
  }
}
