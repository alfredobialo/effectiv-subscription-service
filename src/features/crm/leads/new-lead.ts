import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

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
            @for (d of data; track $index) {
              <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ d.date | date:'dd-MMM' }}</td>
                <td>{{ d.qty }}</td>
                <td>{{ d.cost | currency:'NGN ' }}</td>
              </tr>
            }
          <tr>
            <td></td>
            <td>Total</td>
            <td>{{sumQty }}</td>
            <td>{{sumCost | currency: 'NGN '}}</td>
          </tr>
          </tbody>
        </table>


      </div>
    </div>

  `,
  styles: ``
})
export class NewLead {
  data = [
    {
      date: new Date(2024, 9, 29),
      qty: 6,
      cost: 120
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
    }
  ];

  sumQty = 0;
  sumCost = 0;
  calculateSumQty() {
    for (let i = 0; i < this.data.length; i++) {
      this.sumQty += this.data[i].qty;
      this.sumCost += this.data[i].cost;
    }
  }
  ngOnInit() {
    this.calculateSumQty()
  }
}

