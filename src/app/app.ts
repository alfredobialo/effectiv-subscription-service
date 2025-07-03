import {Component, linkedSignal, signal} from '@angular/core';
import {SalesDashboard} from '../sales-app/salesDashboard';

@Component({
  selector: 'App',
  imports: [
    SalesDashboard,

  ],
  template: `
    <SalesDashboard />
  `
})
export class App {

}
