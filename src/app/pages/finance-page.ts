import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BasePageComponent} from './BasePageComponent';
import {IntraBankTransfer} from '../../features/finance/bank-transfer/components/intra-bank-transfer';

@Component({
  selector: 'finance-page',
  imports: [
    IntraBankTransfer
  ],
  template: `
    <div class="md:flex justify-between  ">
      <div class="p-4">
        Another Component Here
      </div>
      <div class="p-4">
        <IntraBankTransfer />
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancePage extends BasePageComponent {
  constructor() {
    super();
    this.pageTitle.set("Financial Accounting");
  }

}
