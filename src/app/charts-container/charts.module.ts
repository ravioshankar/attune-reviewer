import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsContainerComponent } from './chartjs/chartjs-container.component';
import { VennChartComponent } from './chartjs/venn-chart/venn-chart.component';
import { RadarChartComponent } from './chartjs/radar-chart/radar-chart.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    ChartjsContainerComponent,
    VennChartComponent,
    RadarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule

  ]
})
export class ChartsModule { }
