import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from './chart.component';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartModule,
  ],
  exports: [
    ChartComponent,
  ]
})
export class ChartAppModule {
}
