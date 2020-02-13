import { Component, Input } from '@angular/core';
import { Video } from '../../models';
import * as moment from 'moment';

moment.locale('fi');

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent {
  @Input()
  video!: Video;

  public getChannelTitleString() {
    const channelName = this.video.channel.name;
    const { episode, season } = this.video;

    if (episode && season) {
      return `${channelName} - S${season} E${episode}`;
    } else if (season) {
      return `${channelName} - Season ${season}`;
    } else {
      return `${channelName}`;
    }
  }

  public getDateString() {
    const date = moment(this.video.publishedAt);
    return date.calendar(moment(), {
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      lastWeek: 'L',
      nextWeek: 'L',
      sameElse: 'L'
    });
  }
}
