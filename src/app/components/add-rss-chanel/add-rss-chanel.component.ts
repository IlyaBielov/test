import {Component, OnInit} from '@angular/core';
import {ChannelsService} from '@app/services';

@Component({
  selector: 'app-add-rss-chanel',
  templateUrl: './add-rss-chanel.component.html',
  styleUrls: ['./add-rss-chanel.component.scss']
})
export class AddRssChanelComponent implements OnInit {
  constructor(private channels$: ChannelsService) {
  }

  ngOnInit() {
  }

  addUrl(el: HTMLInputElement) {
    if (el.validity.valid && el.value) {
      this.channels$.addUrl(el.value);
    } else {
      alert('Please enter correct URL');
    }
    el.value = '';
  }
}
