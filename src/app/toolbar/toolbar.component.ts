import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  drawer: any;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  title = 'Attune';
  readonly menuItems = [
    { link: '/home', label: 'Home', icon: null },
    { link: '/about', label: 'About', icon: null },
    { link: '/secured-feat', label: 'Secured Feature', icon: 'tuiIconLock' },
  ];
  ngOnInit(): void {}
}
