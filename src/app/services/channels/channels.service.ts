import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  feedUrlsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private readonly feedUrls: string[] = ['https://www.thecrazyprogrammer.com/feed'];

  constructor() {
    this.feedUrls = JSON.parse(localStorage.getItem('feedUrls')) || this.feedUrls;
    this.feedUrlsSubject.next(this.feedUrls);
  }

  addUrl(url: string) {
    this.feedUrls.push(url);
    localStorage.setItem('feedUrls', JSON.stringify(this.feedUrls));
    this.feedUrlsSubject.next(this.feedUrls);
  }

  feedUrlsStream(): Observable<string[]> {
    return this.feedUrlsSubject.asObservable();
  }
}
