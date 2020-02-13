import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './state';
import { RootStoreState } from '../index';
import { Channel, LiveStream, SourceSystem, Video } from '../../models';

export const selectContentState: MemoizedSelector<
  RootStoreState.State,
  State
> = createFeatureSelector<State>('content');

// VIDEOS

const getVideosError = (state: State): string | null => state.videos.error;
const getVideosIsLoading = (state: State): boolean => state.videos.isLoading;
const getVideos = (state: State): Video[] | null => state.videos.data;

export const selectVideosError: MemoizedSelector<
  RootStoreState.State,
  string | null
> = createSelector(selectContentState, getVideosError);

export const selectVideosIsLoading: MemoizedSelector<
  RootStoreState.State,
  boolean
> = createSelector(selectContentState, getVideosIsLoading);

export const selectVideos: MemoizedSelector<
  RootStoreState.State,
  Video[] | null
> = createSelector(selectContentState, getVideos);

// LIVE STREAMS

const getLiveStreamsError = (state: State): string | null =>
  state.liveStreams.error;
const getLiveStreamsIsLoading = (state: State): boolean =>
  state.liveStreams.isLoading;
const getLiveStreams = (state: State): LiveStream[] | null =>
  state.liveStreams.data;

export const selectLiveStreamsError: MemoizedSelector<
  RootStoreState.State,
  string | null
> = createSelector(selectContentState, getLiveStreamsError);

export const selectLiveStreamsIsLoading: MemoizedSelector<
  RootStoreState.State,
  boolean
> = createSelector(selectContentState, getLiveStreamsIsLoading);

export const selectLiveStreams: MemoizedSelector<
  RootStoreState.State,
  LiveStream[] | null
> = createSelector(selectContentState, getLiveStreams);

// CHANNELS

const getChannelsError = (state: State): string | null => state.channels.error;
const getChannelsIsLoading = (state: State): boolean =>
  state.channels.isLoading;
const getChannels = (state: State): Channel[] | null => state.channels.data;

export const selectChannelsError: MemoizedSelector<
  RootStoreState.State,
  string | null
> = createSelector(selectContentState, getChannelsError);

export const selectChannelsIsLoading: MemoizedSelector<
  RootStoreState.State,
  boolean
> = createSelector(selectContentState, getChannelsIsLoading);

export const selectChannels: MemoizedSelector<
  RootStoreState.State,
  Channel[] | null
> = createSelector(selectContentState, getChannels);

// SOURCE SYSTEMS

const getSourceSystemsError = (state: State): string | null =>
  state.sourceSystems.error;
const getSourceSystemsIsLoading = (state: State): boolean =>
  state.sourceSystems.isLoading;
const getSourceSystems = (state: State): SourceSystem[] | null =>
  state.sourceSystems.data;

export const selectSourceSystemsError: MemoizedSelector<
  RootStoreState.State,
  string | null
> = createSelector(selectContentState, getSourceSystemsError);

export const selectSourceSystemsIsLoading: MemoizedSelector<
  RootStoreState.State,
  boolean
> = createSelector(selectContentState, getSourceSystemsIsLoading);

export const selectSourceSystems: MemoizedSelector<
  RootStoreState.State,
  SourceSystem[] | null
> = createSelector(selectContentState, getSourceSystems);

// COMMON

export const selectContentError: MemoizedSelector<
  RootStoreState.State,
  string | null
> = createSelector(
  selectVideosError,
  selectLiveStreamsError,
  selectChannelsError,
  selectSourceSystemsError,
  (videosError, liveStreamsError, channelsError, sourceSystemsError) => {
    return (
      videosError || liveStreamsError || channelsError || sourceSystemsError
    );
  }
);

export const selectContentIsLoading: MemoizedSelector<
  RootStoreState.State,
  boolean
> = createSelector(
  selectVideosIsLoading,
  selectLiveStreamsIsLoading,
  selectChannelsIsLoading,
  selectSourceSystemsIsLoading,
  (
    videosLoading,
    liveStreamsLoading,
    channelsLoading,
    sourceSystemsLoading
  ) => {
    return (
      videosLoading ||
      liveStreamsLoading ||
      channelsLoading ||
      sourceSystemsLoading
    );
  }
);
