import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Config from '../../../config';
import { Channel, LiveStream, SourceSystem, Video } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private http: HttpClient) {}

  public getLatestVideosForUser(userId: number): Observable<Video[]> {
    return this.http.get<Video[]>(`${Config.BASE_URL}/videos`, {
      headers: {
        'x-user-id': userId.toString()
      }
    });
  }

  public getLiveStreamsForUser(userId: number): Observable<LiveStream[]> {
    return this.http.get<LiveStream[]>(`${Config.BASE_URL}/live-streams`, {
      headers: {
        'x-user-id': userId.toString()
      }
    });
  }

  public getChannelsUserIsSubscribedTo(userId: number): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${Config.BASE_URL}/channels`, {
      headers: {
        'x-user-id': userId.toString()
      }
    });
  }

  public getSourceSystems(): Observable<SourceSystem[]> {
    return this.http.get<SourceSystem[]>(`${Config.BASE_URL}/source-systems`);
  }
}
