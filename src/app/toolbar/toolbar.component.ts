import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}
  title = 'Attune';
  readonly menuItems = [
    { link: '/home', label: 'Home', icon: null },
    { link: '/about', label: 'About', icon: null },
    { link: '/secured-feat', label: 'Secured Feature', icon: 'tuiIconLock' },
  ];
  ngOnInit(): void {}
}
