import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SalesDashboard} from "../../sales-app/salesDashboard";
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
export class SalesPage {

}
