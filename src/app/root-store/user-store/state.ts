import { User } from '../../models';

export interface SubscribeActionStatus {
  toChannel: string | null;
  success: boolean | null;
  loading: boolean;
}

export interface UnsubscribeActionStatus {
  fromChannel: string | null;
  success: boolean | null;
  loading: boolean;
}

export interface State {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  actionStatuses: {
    subscribe: SubscribeActionStatus;
    unsubscribe: UnsubscribeActionStatus;
  };
}

export const initialState: State = {
  user: null,
  isLoading: false,
  error: null,
  actionStatuses: {
    subscribe: {
      toChannel: null,
      success: null,
      loading: false
    },
    unsubscribe: {
      fromChannel: null,
      success: null,
      loading: false
    }
  }
};
