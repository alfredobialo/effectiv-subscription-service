import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SalesDashboard} from "../../sales-app/salesDashboard";
import {BasePageComponent} from './BasePageComponent';
@Component({
  selector: 'sales-page',
  imports: [SalesDashboard],
  template: `
    <SalesDashboard />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesPage extends BasePageComponent {
  constructor() {
    super();
    this.pageTitle.set("Sales Analytics");
  }
}
