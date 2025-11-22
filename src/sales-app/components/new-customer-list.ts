import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'new-customer-list',
  imports: [],
  template: `
    <p>
      new-customer-list works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCustomerList {

}
