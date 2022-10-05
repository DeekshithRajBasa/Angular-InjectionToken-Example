import { Component, OnInit } from '@angular/core';
import { WIDGET_TOKEN } from '../injector';
import { Widget } from '../widget';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: ChildTwoComponent,
    },
  ],
})
export class ChildTwoComponent implements OnInit, Widget {
  loading = false;
  value = 'two'
  constructor() {}
  load(value): void {
    console.log('load child', value);
    this.loading = !this.loading
  }
  init: () => void;

  ngOnInit() {}
}
