import {Component, signal} from '@angular/core';

@Component({
  template: ``
})
export class BasePageComponent {
  pageTitle = signal<string | undefined>("Base Page Title");
}
