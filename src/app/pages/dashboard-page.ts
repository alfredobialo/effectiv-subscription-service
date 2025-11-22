import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {BasePageComponent} from './BasePageComponent';


@Component({
  selector: 'dashboard-page',
  imports: [],
  template: `
    <p class="text-xl p-3">
     Welcome back
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage extends BasePageComponent{
  constructor() {
   super();
   this.pageTitle.set("My Dashboard");
  }
}
