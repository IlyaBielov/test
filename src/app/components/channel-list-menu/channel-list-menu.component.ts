import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FeedService} from '@app/services';

@Component({
  selector: 'app-channel-list-menu',
  templateUrl: './channel-list-menu.component.html',
  styleUrls: ['./channel-list-menu.component.scss']
})
export class ChannelListMenuComponent implements OnInit {
  @Input() chanelList;
  @Output() currentChanel: EventEmitter<string> = new EventEmitter<string>();

  notificationList: any;

  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
  }

  getNotification(chanel) {
    this.feedService.getFeedContent(chanel)
      .subscribe(
        (feed) => {
          this.notificationList = feed.items;
        },
        (error) => console.log(error));
  }
}
