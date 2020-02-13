import { Channel, LiveStream, SourceSystem, Video } from '../../models';

export interface State {
  videos: {
    isLoading: boolean;
    data: Video[] | null;
    error: string | null;
  };
  liveStreams: {
    isLoading: boolean;
    data: LiveStream[] | null;
    error: string | null;
  };
  channels: {
    isLoading: boolean;
    data: Channel[] | null;
    error: string | null;
  };
  sourceSystems: {
    isLoading: boolean;
    data: SourceSystem[] | null;
    error: string | null;
  };
}

export const initialState: State = {
  videos: {
    isLoading: false,
    data: null,
    error: null
  },
  liveStreams: {
    isLoading: false,
    data: null,
    error: null
  },
  channels: {
    isLoading: false,
    data: null,
    error: null
  },
  sourceSystems: {
    isLoading: false,
    data: null,
    error: null
  }
};
