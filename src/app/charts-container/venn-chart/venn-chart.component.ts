import { Component, OnInit } from '@angular/core';
import * as venn from '@upsetjs/venn.js';
import * as d3 from 'd3';
import * as ddd from 'chartjs-chart-venn'
@Component({
  selector: 'app-venn-chart',
  templateUrl: './venn-chart.component.html',
  styleUrls: ['./venn-chart.component.scss']
})
export class VennChartComponent implements OnInit {

  private svg!:any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    // const sets = [
    //   { sets: ['A'], size: 12 },
    //   { sets: ['B'], size: 12 },
    //   { sets: ['A', 'B'], size: 2 },
    // ];


    // const chart = venn.VennDiagram();
    // d3.select('#venn').datum(sets);


  }

  private createSvg(): void {
    this.svg = d3.select("figure#venn")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
}
