import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChartType, Chart, ChartItem, ChartConfiguration } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const radarChartLabels: string[] = [
      'Education',
      'Income range',
      'Age range',
      'sparkling drink',
      'Electronic gadgets',
      'Outdoor activities',
      'home improvement',
    ];

    const radarChartData = {
      labels: radarChartLabels,
      datasets: [
        {
          label: 'Persona A',
          data: [25, 49, 90, 31, 56, 75, 30],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          hoverBorderJoinStyle: 'miter',
        },
        {
          label: 'Persona B',
          data: [44, 80, 4, 19, 96, 33, 80],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona C',
          data: [98, 8, 4, 19, 26, 51, 48],
          fill: true,
          backgroundColor: 'rgb(175, 225, 175)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona D',
          data: [19, 48, 100, 19, 56, 21, 48],
          fill: true,
          backgroundColor: 'rgba(404, 123, 145, .4)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona E',
          data: [38, 8, 99, 19, 36, 51, 48],
          fill: true,
          backgroundColor: 'rgba(76, 35, 210, .3)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona F',
          data: [6, 3, 76, 90, 76, 89, 80],
          fill: true,
          backgroundColor: 'rgba(225, 216, 33, 0.472)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona A1',
          data: [30, 5, 9, 8, 2, 15, 100],
          fill: true,
          backgroundColor: 'rgba(70, 62, 91, 0.472)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          hoverBorderJoinStyle: 'miter',
        },
        {
          label: 'Persona B1',
          data: [4, 99, 19, 19, 9, 63, 28],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona C1',
          data: [8, 48, 100, 19, 76, 51, 48],
          fill: true,
          backgroundColor: 'rgb(175, 225, 175)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona D1',
          data: [8, 48, 4, 99, 76, 51, 48],
          fill: true,
          backgroundColor: 'rgba(404, 123, 145, .4)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona E1',
          data: [38, 8, 49, 19, 7, 91, 48],
          fill: true,
          backgroundColor: 'rgba(276, 135, 210, .3)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
        {
          label: 'Persona F1',
          data: [6, 3, 26, 90, 36, 29, 8],
          fill: true,
          backgroundColor: 'rgba(91, 33, 225, 0.472)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          hoverBorderJoinStyle: 'bevel',
        },
      ],
    };
    const config: ChartConfiguration = {
      type: 'radar',
      data: radarChartData,
      options: this.radarChartOptions,
    };

    const ctx1 = document.getElementById('radar-canvas') as HTMLCanvasElement;

    const myChart = new Chart(ctx1.getContext('2d') as ChartItem, config);
  }

  // Radar
  public radarChartOptions: {} = {
    responsive: true,
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    //   onHover: (e: any) => {
    //    alert("Hello world")
    // },
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart',
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'gold',
        },
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
    legend: {
      display: false,
      labels: {
        color: 'rgb(255, 99, 132)',
      },
    },
  };
  public radarChartLabels: string[] = [
    'Maths & Stat',
    'English',
    'Physics',
    'Chemistry',
    'Computer Science',
    'PT',
    'Economics',
  ];

  public radarChartData = {
    labels: this.radarChartLabels,
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 90, 81, 56, 55, 50],
        fill: true,
        hoverOffset: 5,
        backgroundColor: 'rgba(255, 99, 132, .4)',
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        hoverBorderJoinStyle: 'miter',
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
        hoverBorderJoinStyle: 'bevel',
      },
    ],
  };
  public radarChartType: ChartType = 'radar';
}
