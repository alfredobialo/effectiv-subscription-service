import {Component} from '@angular/core';
import {Counter} from '../../counterApp/Counter';
import {ManageWarehouses} from '../../features/warehouse/config/manage-warehouses';
import {InboundDashboard} from '../../features/warehouse/inbound/inbound-dashboard';
import {Carousel} from '../../shared/components/carousel/carousel';
import {NewLead} from '../../features/crm/leads/new-lead';
import {BarChart} from '../../features/charts/barChart';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    Counter,
    ManageWarehouses,
    InboundDashboard,
    Carousel,
    NewLead,
    BarChart
  ],
  template: `
    <div class="h-full    rounded-2xl">
      <div class="lg:flex  gap-2 lg:justify-between min-h-[60vh]">
        <div class="flex-3/4 px-3 md:px-4 lg:px-6 py-3 md:py-6 bg-white dark:bg-primary-900 rounded-lg ">

          <BarChart />
          <NewLead />
          <ManageWarehouses />

          <Carousel>

          </Carousel>

        </div>

        <div class="flex flex-col gap-y-6">
          <Counter />
          <WarehouseInBoundDashboard />
        </div>



      </div>

    </div>
  `
})
export class AppPageBody {
}
