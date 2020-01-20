import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DynamicDatabase} from '@app/services/tree/tree.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {
  @Output() currentChanel: EventEmitter<any> = new EventEmitter();

  notificationList: any;
  feedUrls: string[];
  currentNotification;

  constructor(private dataBaseService: DynamicDatabase) {
  }

  ngOnInit() {
    this.feedUrls = this.dataBaseService.rootLevelNodes;

    this.currentNotification = localStorage.getItem('feed') ? JSON.parse(localStorage.getItem('feed')).item : null;
    this.notificationList = localStorage.getItem('feed') ? JSON.parse(localStorage.getItem('feeds')) : null;

    this.dataBaseService.currentFeedSubject
      .subscribe((data) => {
        this.currentNotification = data.item;
      });

    this.dataBaseService.currentFeedsSubject
      .subscribe((data) => {
        this.notificationList = data;
      });
  }
}
