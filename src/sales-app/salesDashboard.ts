import {Component} from '@angular/core';
import {CounterWithSignal} from '../counterApp/CounterWithSignal';
import {Counter} from '../counterApp/Counter';
import {ManageWarehouses} from '../features/warehouse/config/manage-warehouses';
import ThemeSelector from '../themes/theme-selector';

@Component({
  selector: 'SalesDashboard',
  template: `
    <div class="">
      <div class="2xl:flex ">
        <div class="flex-grow-1 p-4">
          <ManageWarehouses />
          <ThemeSelector />
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
    Counter,
    ManageWarehouses,
    ThemeSelector
  ]
})
export class SalesDashboard {

}
