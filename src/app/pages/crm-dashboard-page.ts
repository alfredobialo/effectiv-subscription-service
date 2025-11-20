import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BasePageComponent} from './BasePageComponent';

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
export class CrmDashboardPage extends BasePageComponent{
  constructor() {
    super();
    this.pageTitle.set("Customer Relations");
  }
}
