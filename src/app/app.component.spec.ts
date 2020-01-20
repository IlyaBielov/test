import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {ToolbarComponent} from '@app/components/toolbar/toolbar.component';
import {AddRssChanelComponent} from '@app/components/add-rss-chanel/add-rss-chanel.component';
import {HttpClientModule} from '@angular/common/http';
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
import {ChartAppModule} from '@app/components/chart/chart.module';
import {ChannelListModule} from '@app/components/channel-list/channel-list.module';
import {ChannelsPageModule} from '@app/pages/channels-page/channels-page.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        AppComponent,
        ToolbarComponent,
        AddRssChanelComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
