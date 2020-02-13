import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Config from '../../../config';
import { Observable, of } from 'rxjs';
import { User } from '../../models';
import { catchError, map } from 'rxjs/operators';

interface IsNameAvailableResponse {
  name: string;
  available: boolean;
}

interface SubscriptionResponse {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public login(name: string): Observable<User> {
    return this.http.get<User>(`${Config.BASE_URL}/users/actions/login`, {
      params: {
        name
      }
    });
  }

  public isUsernameAvailable(name: string): Observable<boolean> {
    return this.http
      .get<IsNameAvailableResponse>(
        `${Config.BASE_URL}/users/actions/is-name-available`,
        {
          params: {
            name
          }
        }
      )
      .pipe(map(response => response.available));
  }

  public createUser(name: string): Observable<User> {
    return this.http.post<User>(`${Config.BASE_URL}/users`, {
      name
    });
  }

  public subscribeToChannel(
    userId: number,
    sourceSystem: string,
    channelId: string
  ): Observable<boolean> {
    return this.http
      .get<SubscriptionResponse>(
        `${Config.BASE_URL}/channels/actions/subscribe`,
        {
          params: {
            channel_id: channelId,
            system: sourceSystem
          },
          headers: {
            'x-user-id': userId.toString()
          }
        }
      )
      .pipe(
        map(response => response.success),
        catchError(err => of(false))
      );
  }

  public unsubscribeFromChannel(
    userId: number,
    sourceSystem: string,
    channelId: string
  ): Observable<boolean> {
    return this.http
      .get<SubscriptionResponse>(
        `${Config.BASE_URL}/channels/actions/unsubscribe`,
        {
          params: {
            channel_id: channelId,
            system: sourceSystem
          },
          headers: {
            'x-user-id': userId.toString()
          }
        }
      )
      .pipe(
        map(response => response.success),
        catchError(err => of(false))
      );
  }
}
