import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsPageComponent} from '@app/pages/statistics-page/statistics-page.component';
import {MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import {ChartAppModule} from '@app/components/chart/chart.module';
import {QuantityPropertyPipe} from '@app/pipes/quantity-property/quantity-property.pipe';
import {CheckDuplicateLettersPipe} from '@app/pipes/check-duplicate-letters/check-duplicate-letters.pipe';
import {StatisticsPageRoutingModule} from '@app/pages/statistics-page/statistics-page-routing.module';


@NgModule({
  declarations: [StatisticsPageComponent, QuantityPropertyPipe, CheckDuplicateLettersPipe],
  imports: [
    CommonModule,
    MatMenuModule,
    ChartAppModule,
    MatButtonModule,
    StatisticsPageRoutingModule,
    MatCardModule
  ],
  exports: [StatisticsPageComponent]
})
export class StatisticsPageModule {
}
