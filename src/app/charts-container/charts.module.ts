import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsContainerComponent } from './charts-container.component';
import { VennChartComponent } from './venn-chart/venn-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    ChartsContainerComponent,
    VennChartComponent,
    RadarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule

  ]
})
export class ChartsModule { }
