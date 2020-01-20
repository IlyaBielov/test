import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChannelsPageComponent} from './channels-page.component';
import {ChannelsPageRoutingModule} from '@app/pages/channels-page/channels-page-routing.module';
import {ChannelListModule} from '@app/components/channel-list/channel-list.module';
import {MatCardModule, MatDividerModule} from '@angular/material';
import {QuantityPropertyPipe} from '@app/pipes/quantity-property/quantity-property.pipe';
import {CheckDuplicateLettersPipe} from '@app/pipes/check-duplicate-letters/check-duplicate-letters.pipe';
import {FeedCardComponent} from '@app/components/feed-card/feed-card.component';
import {StripHtmlTagsPipe} from '@app/pipes/strip-html/strip-html-tags.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChannelsPageComponent', () => {
  let component: ChannelsPageComponent;
  let fixture: ComponentFixture<ChannelsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelsPageComponent, FeedCardComponent, StripHtmlTagsPipe],
      imports: [
        ChannelsPageRoutingModule,
        ChannelListModule,
        MatCardModule,
        MatDividerModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
