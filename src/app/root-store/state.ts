import { UserStoreState } from './user-store';
import { ContentStoreState } from './content-store';

export interface State {
  user: UserStoreState.State;
  content: ContentStoreState.State;
}
