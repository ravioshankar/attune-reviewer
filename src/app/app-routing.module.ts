import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartjsContainerComponent } from './charts-container/chartjs/chartjs-container.component';
import { MapViewerComponent } from './map-viewer/map-viewer.component';

const routes: Routes = [
  { path: '', component: MapViewerComponent },
  { path: 'charts', component: ChartjsContainerComponent,
    children: [{path:'chartjs', component: ChartjsContainerComponent}]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
