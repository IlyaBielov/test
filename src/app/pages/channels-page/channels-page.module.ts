import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChannelsPageComponent} from './channels-page.component';
import {ChannelsPageRoutingModule} from '@app/pages/channels-page/channels-page-routing.module';
import {ChannelListModule} from '@app/components/channel-list/channel-list.module';
import {FeedCardComponent} from '@app/components/feed-card/feed-card.component';
import {MatCardModule, MatDividerModule} from '@angular/material';
import {StripHtmlTagsPipe} from '@app/pipes/strip-html/strip-html-tags.pipe';

@NgModule({
  declarations: [ChannelsPageComponent, FeedCardComponent, StripHtmlTagsPipe],
  exports: [
    FeedCardComponent
  ],
  imports: [
    CommonModule,
    ChannelsPageRoutingModule,
    ChannelListModule,
    MatCardModule,
    MatDividerModule,
  ]
})
export class ChannelsPageModule {
}
