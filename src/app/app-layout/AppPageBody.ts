import {Component} from '@angular/core';
import {Counter} from '../../counterApp/Counter';
import {ManageWarehouses} from '../../features/warehouse/config/manage-warehouses';
import {InboundDashboard} from '../../features/warehouse/inbound/inbound-dashboard';
import {Carousel} from '../../shared/components/carousel/carousel';
import {NewLead} from '../../features/crm/leads/new-lead';
import {BarChart} from '../../features/charts/barChart';
import {CounterWithSignal} from '../../counterApp/CounterWithSignal';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="h-full    rounded-2xl">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppPageBody {
}
