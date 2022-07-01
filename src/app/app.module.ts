import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MapViewerComponent } from './map-viewer/map-viewer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ToolpanelComponent } from './toolpanel/toolpanel.component';
import { DataEditorComponent } from './data-editor/data-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MONACO_PATH } from '@materia-ui/ngx-monaco-editor';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { Chart, LinearScale } from 'chart.js';
import { VennDiagramController, ArcSlice } from 'chartjs-chart-venn';
import { ChartsModule } from './charts-container/charts.module';


Chart.register(VennDiagramController, ArcSlice, LinearScale);
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MapViewerComponent,
    ToolpanelComponent,
    DataEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    FlexLayoutModule,
    MonacoEditorModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: 'https://unpkg.com/monaco-editor@0.32.1/min/vs',
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
