import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { AppComponent } from './app.component';
import { ChartjsContainerComponent } from './charts-container/chartjs/chartjs-container.component';
import { ChartsContainerComponent } from './charts-container/charts-container.component';
import { D3jsContainerComponent } from './charts-container/d3js/d3js-container.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MapViewerComponent } from './map-viewer/map-viewer.component';

const routes: Routes = [
  { path: '', title: 'home dashboard', component: HomeDashboardComponent },

  { path: 'maps', title: 'map view', component: MapViewerComponent },
  {
    path: 'charts',
    title: 'chart view',
    component: ChartsContainerComponent,
    children: [
      { path: '', title: 'chart view', component: ChartjsContainerComponent },
      {
        path: 'chartjs',
        title: 'chartjs',
        component: ChartjsContainerComponent,
      },
      { path: 'd3js', title: 'd3js', component: D3jsContainerComponent },
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Attune | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
