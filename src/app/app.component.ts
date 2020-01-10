import {Component, OnInit} from '@angular/core';
import {ChannelsService} from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moc-rss';
  feedUrls: string[];
  feed = '';

  constructor(private channels$: ChannelsService) {
  }

  ngOnInit() {
    this.channels$.feedUrlsStream().subscribe((data) => this.feedUrls = data);
  }
}
