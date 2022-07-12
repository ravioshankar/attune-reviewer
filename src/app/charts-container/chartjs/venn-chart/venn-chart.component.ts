import { Component, Inject, OnInit } from '@angular/core';
import { ChartConfiguration, ChartItem, ChartType, ChartTypeRegistry } from 'chart.js';
import { Chart } from 'chart.js';
import { DOCUMENT } from '@angular/common';
import { extractSets } from 'chartjs-chart-venn';

@Component({
  selector: 'app-venn-chart',
  templateUrl: './venn-chart.component.html',
  styleUrls: ['./venn-chart.component.scss']
})
export class VennChartComponent implements OnInit {

  private svg!: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  public vennChartOptions: any = {
    responsive: true,
    borderColor:[
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ],
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Venn Chart'
      }
    }
  };



  public vennChartType: ChartType = 'venn';

  public data = extractSets(
    [
      { label: 'Red Cards', values: [1, 2, 3, 4,5,6,7,8,9,10, 11, 12, 13] },
      { label: 'Black Cards', values: [1, 2, 3, 11, 12, 13]},
      { label: 'Diamonds', values: [ 11, 12, 13] },

    ],
    {
      label: 'Venn v Eular',
    }
  );

  constructor(@Inject(DOCUMENT) document: Document) {

  }

  ngOnInit(): void {
    const ctx = document.getElementById('canvas');

    const data = extractSets(
      [
        { label: 'Sparkling Drink', values: [1, 2, 3, 4, 11, 12, 13, 14, 15, 16, 17, 18] },
        { label: 'Electronics', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 21, 22, 23] },
        // { label: 'Home improvements', values: [1, 11, 12, 4, 5, 24, 25, 26, 27, 28, 29, 30] },
        { label: 'Cars', values: [1, 11, 12, 4, 5, 24, 25, 26, 27, 28, 29, 30] },
        { label: 'Adventure Sport', values: [1, 11, 12, 4, 5, 24, 25, 26, 27, 28, 29, 30] },
        { label: 'Leisure', values: [18, 11, 12, 4, 5, 24, 25, 26, 27, 28, 2, 3] }
      ],
      {
        label: 'Income > $1000000',
      }
    );

    const ctx1 = document.getElementById('canvas1');
    const bg: any =  [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ];
  const bc:any= [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ]
const bw: any =2;
    if (ctx1 != null) {
    const x = new Chart(ctx1 as ChartItem, {
      type: 'venn',
      data: data,

      options: {
        responsive: true,
        borderColor:bc,
        backgroundColor: bg,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Venn Chart using Extract set'
          }
        }
      }
    }
      );
  }


  const data1 = extractSets(
    [
      { label: 'adventure sport', values: ['alex', 'casey', 'drew', 'hunter', 'jade'] },
      { label: 'Movies', values: ['casey', 'drew', 'jade'] },
      { label: 'Theme parks ', values: ['drew', 'glen', 'jade', 'casey','hunter'] },

    ],
    {
      label: 'Leisure Activities',
    }
  );


  const sample = {
    "labels": [
        "adventure sport",
        "Movies",
        "Theme parks ",
        "adventure sport ∩ Movies",
        "adventure sport ∩ Theme parks ",
        "Movies ∩ Theme parks ",
        "adventure sport ∩ Movies ∩ Theme parks "
    ],
    "datasets": [
        {
            "label": "Leisure Activities",
            "data": [
                {
                    "sets": [
                        "adventure sport"
                    ],
                    "label": "adventure sport",
                    "value": '1%',
                    "values": [
                        "alex"
                    ],
                    "degree": 1
                },
                {
                    "sets": [
                        "Movies"
                    ],
                    "label": "Movies",
                    "value": "0%",
                    "values": [],
                    "degree": 1
                },
                {
                    "sets": [
                        "Theme parks "
                    ],
                    "label": "Theme parks ",
                    "value": "1%",
                    "values": [
                        "glen"
                    ],
                    "degree": 1
                },
                {
                    "sets": [
                        "adventure sport",
                        "Movies"
                    ],
                    "label": "adventure sport ∩ Movies",
                    "value": "0%",
                    "values": [],
                    "degree": 2
                },
                {
                    "sets": [
                        "adventure sport",
                        "Theme parks "
                    ],
                    "label": "adventure sport ∩ Theme parks ",
                    "value": "1%",
                    "values": [
                        "hunter"
                    ],
                    "degree": 2
                },
                {
                    "sets": [
                        "Movies",
                        "Theme parks "
                    ],
                    "label": "Movies ∩ Theme parks ",
                    "value": "0%",
                    "values": [],
                    "degree": 2
                },
                {
                    "sets": [
                        "adventure sport",
                        "Movies",
                        "Theme parks "
                    ],
                    "label": "adventure sport ∩ Movies ∩ Theme parks ",
                    "value": "3%",
                    "values": [
                        "casey",
                        "drew",
                        "jade"
                    ],
                    "degree": 3
                }
            ]
        }
    ]
}

     const config : any =
   {
      type: 'venn',
      data: sample,
      options: this.vennChartOptions
    };


    if (ctx != null) {
      const myVennChart = new Chart(ctx as ChartItem, config)


      // myVennChart.config.data.datasets.forEach((ds)=>{
      //   ds.data.pop();
      // })

      // myVennChart.data.labels?.forEach(d => console.log(d));
      myVennChart.update();
    }

    // const ctxVenn = document.getElementById('canvas-venn');
    // const ctxEuler = document.getElementById('canvas-euler');

    // if (ctxVenn != null || ctxEuler!= null) {

    //   const vennConfigData : any =
    //   {
    //      type: 'venn',
    //      data: this.data,
    //      options: this.vennChartOptions
    //    };

    //    const eulerConfigData : any =
    //    {
    //       type: 'euler',
    //       data: this.data,
    //       options: this.vennChartOptions
    //     };
    //   const myVennChart = new Chart(ctxVenn as ChartItem, vennConfigData)
    //   const myEulerChart = new Chart(ctxEuler as ChartItem, eulerConfigData)
    // }

  }



}
