import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'new-sales-invoice',
  imports: [],
  template: `
    <p>
      new-sales-invoice works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSalesInvoice {

}
