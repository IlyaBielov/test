import {Component, OnInit} from '@angular/core';
import {DynamicDatabase} from '@app/services/tree/tree.service';

@Component({
  selector: 'app-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.scss']
})
export class ChannelsPageComponent implements OnInit {
  feedUrls: string[];
  feed;

  constructor(public database: DynamicDatabase) {

  }

  ngOnInit() {
    this.feedUrls = this.database.rootLevelNodes;
    this.feed = localStorage.getItem('feed') ? JSON.parse(localStorage.getItem('feed')).item : null;

    this.database.currentFeedSubject
      .subscribe((data) => {
        this.feed = data.item;
      });
  }
}
