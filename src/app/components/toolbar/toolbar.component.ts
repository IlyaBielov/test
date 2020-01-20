import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  name: string;
  link: string;
  img: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/IlyaBielov')
      .subscribe((data: { name: string, html_url: string, avatar_url: string }) => {
        this.img = data.avatar_url;
        this.name = data.name;
        this.link = data.html_url;
      });
  }

  log(value) {
    console.log(value);
  }
}
