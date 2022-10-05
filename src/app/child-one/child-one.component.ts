import { Component, OnInit } from '@angular/core';
import { WIDGET_TOKEN } from '../injector';
import { Widget } from '../widget';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: ChildOneComponent,
    },
  ],
})
export class ChildOneComponent implements OnInit, Widget {
  loading = false;
  value = 'one';
  constructor() {}
  load(value): void {
    console.log('load child', value);
    this.loading = !this.loading;
  }
  init: () => void;

  ngOnInit() {}
}
