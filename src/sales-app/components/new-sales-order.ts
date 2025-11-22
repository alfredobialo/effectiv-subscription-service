import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'new-sales-order',
  imports: [],
  template: `
    <h1>New Sales Order</h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSalesOrder {

}
