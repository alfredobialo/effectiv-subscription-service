import {Component, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import sumBy from 'lodash/sumBy';
@Component({
  selector: 'new-lead, NewLead',
  imports: [CommonModule],
  template: `
    <div>
      <h1>
        Cost Valuation
      </h1>
      <div class="dark:bg-primary-600 rounded-2xl p-4 min-h-[200px]">
        <table>
          <thead>
          <tr>
            <th class="w-16"></th>
            <th class="w-[200px]"></th>
            <th class="w-[200px]">All</th>
            <th class="w-[200px]">Revenue</th>
          </tr>

          </thead>
          <tbody>
            @for (d of data(); track $index) {
              <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ d.date | date:'dd-MMM' }}</td>
                <td>{{ d.qty }}</td>
                <td>{{ d.cost | currency:'NGN ' }}</td>
              </tr>
            }
          <tr class="dark:bg-primary-700 font-extrabold text-[1.3rem]">
            <td></td>
            <td>Total</td>
            <td>{{sumQty() }}</td>
            <td>{{sumCost() | currency: 'NGN '}}</td>
          </tr>
          </tbody>
        </table>


      </div>
    </div>

  `,
  styles: ``
})
export class NewLead {
  data = signal([
    {
      date: new Date(2024, 9, 29),
      qty: 8,
      cost: 1200
    },
    {
      date: new Date(2024, 10, 20),
      qty: 6,
      cost: 120
    },
    {
      date: new Date(2024, 11, 24),
      qty: 19,
      cost: 380
    },
    {
      date: new Date(2024, 7, 12),
      qty: 13,
      cost: 1880
    },
    {
      date: new Date(2024, 6, 16),
      qty: 79,
      cost: 4301
    },
    {
      date: new Date(2024, 10, 13),
      qty: 29,
      cost: 1420
    },
    {
      date: new Date(2024, 10, 4),
      qty: 13,
      cost: 670
    },
  ]);

  sumQty = computed(() => {
    return sumBy(this.data(),(x) => x.qty);
  });
  sumCost = computed(() => {
    return sumBy(this.data(),(x) => x.cost);
  });



}

