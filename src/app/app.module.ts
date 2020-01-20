import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ChartAppModule} from '@app/components/chart/chart.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {ChannelListModule} from '@app/components/channel-list/channel-list.module';
import {ChannelsPageModule} from '@app/pages/channels-page/channels-page.module';
import {AddRssChanelComponent} from '@app/components/add-rss-chanel/add-rss-chanel.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AddRssChanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    ChartAppModule,
    ChannelListModule,
    ChannelsPageModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
