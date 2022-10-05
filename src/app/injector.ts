import { InjectionToken } from '@angular/core';
import { Widget } from './widget';

export const WIDGET_TOKEN = new InjectionToken<Widget>('child');
