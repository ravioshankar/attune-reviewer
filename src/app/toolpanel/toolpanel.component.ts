import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON';

@Component({
  selector: 'app-toolpanel',
  templateUrl: './toolpanel.component.html',
  styleUrls: ['./toolpanel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolpanelComponent implements OnInit {

  panelOpenState = false;
  geoJson: GeoJSON | undefined;
  constructor() { }
  @Input()
  setData(data: GeoJSON) {
    this.geoJson = data;
  }

  ngOnInit(): void {
  }

  onGeojsonData(geojsonData: GeoJSON) {
    this.geoJson = geojsonData;
  }
}
