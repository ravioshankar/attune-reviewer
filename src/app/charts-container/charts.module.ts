import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsContainerComponent } from './charts-container.component';
import { VennChartComponent } from './venn-chart/venn-chart.component';



@NgModule({
  declarations: [
    ChartsContainerComponent,
    VennChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
