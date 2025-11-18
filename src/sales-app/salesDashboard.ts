import {Component} from '@angular/core';
import {CounterWithSignal} from '../counterApp/CounterWithSignal';
import {BarChart} from '../features/charts/barChart';
import {Counter} from '../counterApp/Counter';
import {ManageWarehouses} from '../features/warehouse/config/manage-warehouses';

@Component({
  selector: 'SalesDashboard',
  template: `
    <div class="">
      <h1 class="">Sales App</h1>
      <div class="flex ">
        <div class="flex-grow-1 p-4">
          <ManageWarehouses />
          <div class="mt-20 ">
            <CounterWithSignal />
          </div>
        </div>
        <div class="p-4">
          <div class="mt-6 flex flex-col max-h-max justify-between">
            <Counter />
            <Counter />

          </div>
        </div>
      </div>
    </div>

  `,
  standalone: true,
  imports: [
    CounterWithSignal,
    BarChart,
    Counter,
    ManageWarehouses
  ]
})
export class SalesDashboard {

}
