import { Component, OnInit } from '@angular/core';
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
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
})
export class MapCardComponent implements OnInit {
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
}
