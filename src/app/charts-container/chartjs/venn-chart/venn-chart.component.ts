import { Component, Inject, OnInit } from '@angular/core';
import {
  ChartConfiguration,
  ChartItem,
  ChartType,
  ChartTypeRegistry,
} from 'chart.js';
import { Chart } from 'chart.js';
import { DOCUMENT } from '@angular/common';
import { VennDiagramChart, extractSets } from 'chartjs-chart-venn';

@Component({
  selector: 'app-venn-chart',
  templateUrl: './venn-chart.component.html',
  styleUrls: ['./venn-chart.component.scss'],
})
export class VennChartComponent implements OnInit {
  private svg!: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  constructor(@Inject(DOCUMENT) document: Document) {}

  ngOnInit(): void {
    const ctx = document.getElementById('canvas');

    const config: ChartConfiguration<
      keyof ChartTypeRegistry,
      {
        sets: string[];
        value: number;
      }[],
      string
    > = {
      type: 'venn',
      data: {
        labels: [
          'Soccer',
          'Tennis',
          'Volleyball',
          'Soccer ∩ Tennis',
          'Soccer ∩ Volleyball',
          'Tennis ∩ Volleyball',
          'Soccer ∩ Tennis ∩ Volleyball',
        ],
        datasets: [
          {
            label: 'Sports',
            data: [
              { sets: ['Soccer'], value: 2 },
              { sets: ['Tennis'], value: 0 },
              { sets: ['Volleyball'], value: 1 },
              { sets: ['Soccer', 'Tennis'], value: 1 },
              { sets: ['Soccer', 'Volleyball'], value: 0 },
              { sets: ['Tennis', 'Volleyball'], value: 1 },
              { sets: ['Soccer', 'Tennis', 'Volleyball'], value: 1 },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Venn Chart',
          },
        },
      },
    };

    //   const config1: ChartConfiguration<
    //   keyof ChartTypeRegistry,
    //   {
    //     sets: string[];
    //     value: number;
    //   }[],
    //   string
    // > = {
    //     type: 'venn',
    //     data: extractSets(
    //       [
    //         { label: 'Soccer', values: ['alex', 'casey', 'drew', 'hunter'] },
    //         { label: 'Tennis', values: ['casey', 'drew', 'jade'] },
    //         { label: 'Volleyball', values: ['drew', 'glen', 'jade'] },
    //       ],
    //       {
    //         label: 'Sports',
    //       }
    //     ),
    //     options: {},
    //   };

    if (ctx != null) {
      const myVennChart = new Chart(ctx as ChartItem, config);
    }
  }

  public vennChartOptions: {} = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Venn Chart',
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };
  public vennChartLabels: string[] = [
    'Maths & Stat',
    'English',
    'Physics',
    'Chemistry',
    'Computer Science',
    'PT',
    'Economics',
  ];

  public vennChartData = {};

  public vennChartType: ChartType = 'venn';
}
