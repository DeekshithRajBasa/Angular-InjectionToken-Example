import { Component, ContentChild, OnInit } from '@angular/core';
import { WIDGET_TOKEN } from '../injector';
import { Widget } from '../widget';

@Component({
  selector: 'app-parent-inject',
  templateUrl: './parent-inject.component.html',
  styleUrls: ['./parent-inject.component.css'],
})
export class ParentInjectComponent {
  @ContentChild(WIDGET_TOKEN) injectedComponent: Widget;
  constructor() {}

  load() {
    this.injectedComponent.load(this.injectedComponent.value);
  }
}
