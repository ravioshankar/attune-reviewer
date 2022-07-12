import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { intersectionAreaPath, ISetOverlap, sortAreas, venn, VennDiagram } from '@upsetjs/venn.js';

@Component({
  selector: 'app-venn-d3',
  templateUrl: './venn-d3.component.html',
  styleUrls: ['./venn-d3.component.scss']
})
export class VennD3Component implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {

    this.vennChart();
  }




  vennChart() {
    let sets = [
      { sets: ['A'], size: 16 , "label": "Male"},
      { sets: ['B'], size: 12 , "label": "Female"},
      { sets: ['A', 'B'], size: 2 , "label": "Both"}
    ];

    // get positions for each set
    // const sets = venn(data, overlaps);
    this.chart = VennDiagram();
    sets.sort(function (a, b) { return a.size - b.size; })

    d3.select("#venn")
    .datum(sets).call(this.chart);
    this.d3Interaction();
  }

  /**
   * Add interaction
   */
  d3Interaction() {

    const colours = ['black', 'blue', 'red', 'orange', 'green'];

    d3.selectAll("#venn .venn-circle path")
      .style("fill-opacity", 0)
      .style("stroke", "white")
      .style("stroke-width", 5)
      .style("stroke-opacity", .5)
      .style("fill", function (d, i) { return colours[i]; })
      .style("stroke", function (d, i) { return colours[i]; });

    d3.selectAll("#venn .venn-circle text")
      .style("fill", function (d, i) { return colours[i] })
      .style("font-weight", "100");

    d3.selectAll("#venn .venn-circle")
      .on("mouseover", function (d, i) {
        var node = d3.select(this).transition();

      node.select("path").style("fill-opacity", .2).style("stroke-opacity", 1);
        node.select("text").style("font-weight", "80")
          .style("font-size", "24px");
      })
      .on("mouseout", function (d, i) {
        var node = d3.select(this).transition();
        node.select("path").style("fill-opacity", 0).style("stroke-opacity", 0.5);
        node.select("text").style("font-weight", "80")
          .style("font-size", "16px");
      })


  }


  onUpdateData() {
    d3.select("#venn").datum(getSetIntersections()).call(this.chart);
    this.d3Interaction();


  }

}




function getSetIntersections(): any {

  return [
    { sets: ['A'], size: 16, "label": "$20k <" },
    { sets: ['B'], size: 12, "label": "$20k > | < $50k" },
    { sets: ['C'], size: 11 , "label": "$10k > & < $100k"},
    { sets: ['D'], size: 4 , "label": "$100k > "},
    { sets: ['E'], size: 4 , "label": "$1M > "},
    { sets: ['A', 'B'], size: 0, "label": "None" },
    { sets: ['C', 'B'], size: 2 , "label": "People"},
    { sets: ['A', 'C'], size: 4 , "label": "People"}
  ];

//   return [
//     {
//         "label": "Radiohead",
//         "size": 77348,
//         "radius": 148.63845865422067,
//         "y": 241.88901329482934,
//         "x": 224.86149286762196
//     },
//     {
//         "label": "Thom Yorke",
//         "size": 5621,
//         "radius": 40.06945555749262,
//         "y": 363.1712431871204,
//         "x": 203.1409523209074
//     },
//     {
//         "label": "John Lennon",
//         "size": 7773,
//         "radius": 47.11953356338647,
//         "y": 227.09770566728264,
//         "x": 66.84457445650037
//     },
//     {
//         "label": "Kanye West",
//         "size": 27053,
//         "radius": 87.90515926665222,
//         "y": 241.88906427878453,
//         "x": 406.09484073334784
//     },
//     {
//         "label": "Eminem",
//         "size": 19056,
//         "radius": 73.77725981732853,
//         "y": 139.68871186597516,
//         "x": 384.45410187900444
//     },
//     {
//         "label": "Elvis Presley",
//         "size": 15839,
//         "radius": 67.26211640207725,
//         "y": 73.26211640207727,
//         "x": 281.6940009395106
//     },
//     {
//         "label": "Explosions in the Sky",
//         "size": 10813,
//         "radius": 55.57503570096243,
//         "y": 374.42100988877667,
//         "x": 284.4196722047087
//     },
//     {
//         "label": "Bach",
//         "size": 9264,
//         "radius": 51.440587743772895,
//         "y": 142.34639408578855,
//         "x": 90.05458789635655
//     },
//     {
//         "label": "Mozart",
//         "size": 3959,
//         "radius": 33.62787308984171,
//         "y": 159.05120725297525,
//         "x": 39.62787308984171
//     },
//     {
//         "label": "Philip Glass",
//         "size": 4793,
//         "radius": 37.000736037419294,
//         "y": 368.29056058400283,
//         "x": 133.14731432371656
//     },
//     {
//         "label": "St. Germain",
//         "size": 4136,
//         "radius": 34.3713756181123,
//         "y": 322.76032603544735,
//         "x": 82.79351865430826
//     },
//     {
//         "label": "Morrissey",
//         "size": 10945,
//         "radius": 55.91322362365856,
//         "y": 96.73607157470923,
//         "x": 178.03573975708852
//     },
//     {
//         "label": "Outkast",
//         "size": 8444,
//         "radius": 49.11122433751721,
//         "y": 323.81496336073593,
//         "x": 367.2658315766787
//     }
// ]
}
