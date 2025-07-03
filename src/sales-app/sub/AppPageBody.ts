import {Component} from '@angular/core';
import {Counter} from '../../counterApp/Counter';
import {ManageWarehouses} from '../../features/warehouse/config/manage-warehouses';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    Counter,
    ManageWarehouses
  ],
  template: `
    <div class="h-full   bg-white rounded-2xl">
      <div class="lg:flex  gap-2 lg:justify-between min-h-[60vh]">
        <div class="flex-3/4 px-4 md:px-6 py-3 md:py-6 bg-gray-100 rounded">
          <ManageWarehouses />

        </div>
        <div>
          <Counter />
          Right Content
        </div>



      </div>

    </div>
  `
})
export class AppPageBody {
}
