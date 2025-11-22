import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BasePageComponent} from './BasePageComponent';

@Component({
  selector: 'purchase-page',
  imports: [],
  template: `
    <p>
      purchase-page works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchasePage extends BasePageComponent{
  constructor() {
    super();
    this.pageTitle.set("Purchases");
  }

}
