import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BasePageComponent} from './BasePageComponent';

@Component({
  selector: 'inventory-page',
  imports: [],
  template: `
    <p>
      inventory-page works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryPage extends BasePageComponent{
  constructor() {
    super();
    this.pageTitle.set("Inventory");
  }

}
