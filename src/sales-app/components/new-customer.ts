import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'new-customer',
  imports: [],
  template: `
    <p>
      new-customer works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCustomer {

}
