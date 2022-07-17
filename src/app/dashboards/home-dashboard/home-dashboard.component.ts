import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, id: 1 },
          { title: 'Card 2', cols: 1, rows: 1, id: 2 },
          { title: 'Card 3', cols: 1, rows: 1, id: 3 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, id: 1 },
        { title: 'Card 2', cols: 1, rows: 1, id: 2 },
        { title: 'Card 3', cols: 1, rows: 1, id: 3 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
