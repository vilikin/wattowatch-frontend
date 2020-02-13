import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Channel } from '../../models';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html'
})
export class ChannelComponent {
  @Input()
  channel!: Channel;

  @Output()
  unsubscribe = new EventEmitter();
}
