import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BasePageComponent} from './BasePageComponent';

@Component({
  selector: 'finance-page',
  imports: [],
  template: `
    <p>
      finance-page works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancePage extends BasePageComponent{
  constructor() {
    super();
    this.pageTitle.set("Financial Accounting");
  }

}
