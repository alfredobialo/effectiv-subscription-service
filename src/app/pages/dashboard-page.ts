import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dashboard-page',
  imports: [],
  template: `
    <p>
      dashboard-page works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage {

}
