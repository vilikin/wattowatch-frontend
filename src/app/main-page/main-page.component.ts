import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../root-store';
import { LiveStream, Video } from '../models';
import { ContentStoreSelectors } from '../root-store/content-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  videos$!: Observable<Video[] | null>;
  liveStreams$!: Observable<LiveStream[] | null>;

  constructor(
    private store: Store<RootStoreState.State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.error$ = this.store.select(ContentStoreSelectors.selectContentError);
    this.isLoading$ = this.store.select(
      ContentStoreSelectors.selectContentIsLoading
    );
    this.videos$ = this.store.select(ContentStoreSelectors.selectVideos);
    this.liveStreams$ = this.store.select(
      ContentStoreSelectors.selectLiveStreams
    );
  }
}
