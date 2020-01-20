import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatisticsPageComponent} from './statistics-page.component';
import {MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import {ChartAppModule} from '@app/components/chart/chart.module';
import {StatisticsPageRoutingModule} from '@app/pages/statistics-page/statistics-page-routing.module';
import {QuantityPropertyPipe} from '@app/pipes/quantity-property/quantity-property.pipe';
import {CheckDuplicateLettersPipe} from '@app/pipes/check-duplicate-letters/check-duplicate-letters.pipe';
import {HttpClientModule} from '@angular/common/http';

describe('StatisticsComponent', () => {
  let component: StatisticsPageComponent;
  let fixture: ComponentFixture<StatisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsPageComponent, QuantityPropertyPipe, CheckDuplicateLettersPipe],
      imports: [
        MatMenuModule,
        ChartAppModule,
        MatButtonModule,
        StatisticsPageRoutingModule,
        MatCardModule,
        HttpClientModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
