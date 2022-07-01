import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {  ChartType } from 'chart.js';
// import { Label } from 'ng2-charts';


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Radar
  public radarChartOptions: {} = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    },
    scales: {
      r: {
          angleLines: {
              display: true
          },
          suggestedMin: 50,
          suggestedMax: 100
      }
  }
  };
  public radarChartLabels: string[] = ['Maths & Stat', 'English', 'Physics', 'Chemistry', 'Computer Science', 'PT', 'Economics'];

  public radarChartData = {
    labels: this.radarChartLabels,
    datasets: [{
        label: 'Series A',
        data: [65, 59, 90, 81, 56, 55, 50],
        fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        hoverBorderJoinStyle: 'miter'
    },
    {
      label: 'Series B',
      data: [78, 48, 40, 19, 96, 71, 80],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
      hoverBorderJoinStyle: 'bevel'

  }
  ]
};
  public radarChartType: ChartType = 'radar';

}
