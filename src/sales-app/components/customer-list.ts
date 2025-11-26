import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'customer-list',
  imports: [],
  template: `
    <p>
      new-customer-list works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerList {

}
