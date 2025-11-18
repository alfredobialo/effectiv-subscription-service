import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class InventoryPage {

}
