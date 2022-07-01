import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsContainerComponent } from './chartjs/chartjs-container.component';
import { VennChartComponent } from './chartjs/venn-chart/venn-chart.component';
import { RadarChartComponent } from './chartjs/radar-chart/radar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { D3jsContainerComponent } from './d3js/d3js-container.component';
import { VennD3Component } from './d3js/venn-d3/venn-d3.component';
import { RadarD3Component } from './d3js/radar-d3/radar-d3.component';
import { ChartsContainerComponent } from './charts-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    ChartjsContainerComponent,
    VennChartComponent,
    RadarChartComponent,
    D3jsContainerComponent,
    VennD3Component,
    RadarD3Component,
    ChartsContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgChartsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartsModule { }
