import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChartsContainerComponent } from './charts-container/charts-container.component';
import { MapViewerComponent } from './map-viewer/map-viewer.component';

const routes: Routes = [
  { path: '', component: MapViewerComponent },
  { path: 'charts', component: ChartsContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
