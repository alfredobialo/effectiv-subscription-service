import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {BasePageComponent} from './BasePageComponent';


@Component({
  selector: 'dashboard-page',
  imports: [],
  template: `
    <div class="flex justify-between">
      <div class="flex-1">
        <p class="text-2xl p-3 text-primary-500 dark:text-primary-200">
          Welcome back
        </p>
      </div>

      <div class="call-to-action">
        <h1>We are here Again</h1>
      </div>
    </div>

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
