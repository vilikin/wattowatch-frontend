export enum SourceSystemSupportedFeature {
  LIVE_STREAMS = 'LIVE_STREAMS',
  VIDEOS = 'VIDEOS',
  CHANNEL_SUGGESTIONS = 'CHANNEL_SUGGESTIONS'
}

export interface User {
  id: number;
  name: string;
}

export interface SourceSystem {
  system: string;
  supportedFeatures: SourceSystemSupportedFeature[];
}

export interface Channel {
  id: number;
  sourceSystem: string;
  idInSourceSystem: string;
  name: string;
  imageUrl?: string;
}

export interface Video {
  id: number;
  title: string;
  publishedAt: string;
  imageUrl?: string;
  episode?: number;
  season?: number;
  channel: Channel;
}

export interface LiveStream {
  id: number;
  title: string;
  live: boolean;
  liveSince: string;
  imageUrl?: string;
  channel: Channel;
}
