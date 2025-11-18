import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crm-dashboard-page',
  imports: [],
  template: `
    <p>
      crm-dashboard-page works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrmDashboardPage {

}
