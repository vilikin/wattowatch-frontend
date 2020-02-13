import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../root-store';
import { Channel, SourceSystem, User } from '../models';
import { Observable, of } from 'rxjs';
import {
  selectChannels,
  selectChannelsIsLoading,
  selectSourceSystems
} from '../root-store/content-store/selectors';
import { FormControl } from '@angular/forms';
import {
  selectSubscribeActionStatus,
  selectUnsubscribeActionStatus,
  selectUser
} from '../root-store/user-store/selectors';
import {
  SubscribeRequestAction,
  UnsubscribeRequestAction
} from '../root-store/user-store/actions';
import {
  SubscribeActionStatus,
  UnsubscribeActionStatus
} from '../root-store/user-store/state';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html'
})
export class SubscribePageComponent implements OnInit {
  channels$!: Observable<Channel[] | null>;
  channelsLoading$!: Observable<boolean>;
  user?: User;
  sourceSystems?: SourceSystem[];

  selectedSourceSystem?: string;
  channelName = new FormControl('');

  subscribeActionStatus$!: Observable<SubscribeActionStatus>;
  unsubscribeActionStatus$!: Observable<UnsubscribeActionStatus>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.channels$ = this.store.select(selectChannels);
    this.channelsLoading$ = this.store.select(selectChannelsIsLoading);

    this.subscribeActionStatus$ = this.store.select(
      selectSubscribeActionStatus
    );

    this.unsubscribeActionStatus$ = this.store.select(
      selectUnsubscribeActionStatus
    );

    this.store.select(selectUser).subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

    this.store.select(selectSourceSystems).subscribe(sourceSystems => {
      if (sourceSystems) {
        this.sourceSystems = sourceSystems;
        this.selectedSourceSystem = sourceSystems[0].system;
      }
    });
  }

  changeSelectedSourceSystem(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSourceSystem = target.value;
  }

  subscribe(): void {
    if (this.user && this.selectedSourceSystem && this.channelName.value) {
      this.store.dispatch(
        new SubscribeRequestAction({
          channelName: this.channelName.value,
          sourceSystemId: this.selectedSourceSystem
        })
      );
    }
  }

  unsubscribe(channel: Channel): void {
    this.store.dispatch(
      new UnsubscribeRequestAction({
        channelName: channel.idInSourceSystem,
        sourceSystemId: channel.sourceSystem
      })
    );
  }
}
