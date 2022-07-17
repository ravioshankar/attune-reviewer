import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Chart, ChartItem, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoughnutChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const doughnutChartElement: HTMLCanvasElement | null =
      document.getElementById('doughnut-chart') as HTMLCanvasElement;
    const ctx = doughnutChartElement.getContext('2d');

    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 5,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: data,
      options: {
        elements: {
          arc: {
            borderJoinStyle: 'miter',
            borderWidth: 3,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'right',
            // onHover: (d)=>{ alert(d.x)},
            // generateLabels: () => {},
            // labels: {
            //     color: 'rgb(255, 99, 132)',
            //     textAlign: 'center'

            // }
          },
        },
      },
    };

    const doughnutChart = new Chart(ctx as ChartItem, config);
  }
}
