import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SalesDashboard} from "../../sales-app/salesDashboard";
import {BasePageComponent} from './BasePageComponent';
import {RouterOutlet} from '@angular/router';
import {salesRoutes} from '../../sales-app/sales-routes';
@Component({
  selector: 'sales-page',
  imports: [SalesDashboard, RouterOutlet],
  template: `
    <SalesDashboard />
    <router-outlet></router-outlet>
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

  protected readonly salesRoutesInfo = salesRoutes;
}
