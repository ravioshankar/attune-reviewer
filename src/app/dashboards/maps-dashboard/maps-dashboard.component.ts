import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import homePageData from 'src/assets/data/homePageData.json';
import { iHomePageData } from 'src/app/interface/home-page-data.interface';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Feature, View } from 'ol';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Map from 'ol/Map';

@Component({
  selector: 'app-maps-dashboard',
  templateUrl: './maps-dashboard.component.html',
  styleUrls: ['./maps-dashboard.component.scss'],
})
export class MapsDashboardComponent {
  homePageMetaData: iHomePageData = structuredClone(homePageData);

  map!: Map;

  currentLocation: any;

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {
    navigator.geolocation.getCurrentPosition((p) => {
      this.currentLocation = fromLonLat([
        p.coords.longitude,
        p.coords.latitude,
      ]);

      const raster = new TileLayer({
        source: new OSM(),
      });

      var source = new VectorSource({
        features: [new Feature(new Point(this.currentLocation))],
      });
      var vector = new VectorLayer({
        source: source,
        style: new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)',
          }),
          stroke: new Stroke({
            color: '#ffcc33',
            width: 2,
          }),
          image: new CircleStyle({
            radius: 7,
            fill: new Fill({
              color: 'red',
            }),
          }),
        }),
      });
      this.map = new Map({
        target: 'map',
        layers: [raster, vector],
        view: new View({
          center: this.currentLocation,
          zoom: 12,
        }),
      });
    });
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return Object.values(this.homePageMetaData);
      }
      return Object.values(this.homePageMetaData);

      // return [
      //   { title: 'Openlayers', cols: 1, rows: 1 },
      //   { title: 'Card 2', cols: 1, rows: 1 },
      //   { title: 'Card 3', cols: 1, rows: 1 },
      //   { title: 'Card 4', cols: 1, rows: 1 },
      //   { title: 'Card 3', cols: 1, rows: 1 },
      //   { title: 'Card 4', cols: 1, rows: 1 },
      // ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
