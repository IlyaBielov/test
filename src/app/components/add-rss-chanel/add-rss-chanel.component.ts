import {Component, OnInit} from '@angular/core';
import {DynamicDatabase} from '@app/services/tree/tree.service';

@Component({
  selector: 'app-add-rss-chanel',
  templateUrl: './add-rss-chanel.component.html',
  styleUrls: ['./add-rss-chanel.component.scss'],
})
export class AddRssChanelComponent implements OnInit {
  constructor(private dataBaseService: DynamicDatabase) {
  }

  ngOnInit() {
  }

  addUrl(el: HTMLInputElement) {
    if (el.validity.valid && el.value) {
      this.dataBaseService.newFeedSubject.next(el.value);
    } else {
      alert('Please enter correct URL');
    }
    el.value = '';
  }
}
