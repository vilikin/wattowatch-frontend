import { Component, Input } from '@angular/core';
import { LiveStream } from '../../models';
import * as moment from 'moment';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html'
})
export class LiveStreamComponent {
  @Input()
  liveStream!: LiveStream;

  public getLiveForHours(): string {
    const liveSince = moment(this.liveStream.liveSince);
    const diffInMinutes = moment().diff(liveSince, 'minutes');
    const diffInHours = moment().diff(liveSince, 'hours');
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes`;
    } else {
      return `${diffInHours}h`;
    }
  }
}
