import {Component, OnInit} from '@angular/core';
import {DynamicDatabase} from '@app/services/tree/tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataBaseService: DynamicDatabase) {
  }

  ngOnInit() {
    if (localStorage.getItem('feed')) {
      this.dataBaseService.currentFeedSubject.next(JSON.parse(localStorage.getItem('feed')));
    }
  }

  setChannels(value) {
    this.dataBaseService.currentFeedSubject.next(value);
    localStorage.setItem('feed', JSON.stringify(value));
  }


}
