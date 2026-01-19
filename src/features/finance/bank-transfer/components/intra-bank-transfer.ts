import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BankInfoModel} from '../models/bankTransferModel';
import {knownBankList} from '../../services/banklist';

@Component({
  selector: 'intra-bank-transfer, IntraBankTransfer',
  imports: [FormsModule],
  template: `
    <div
      class="shadow-2xl dark:shadow-primary-400 min-h-[400px] w-[350px] lg:w-[450px] p-4 rounded-lg focus:ring-2 dark:focus:ring-primary-700 focus:ring-primary-400 dark:bg-surface-600 bg-surface-50">
      <p class="text-xl mb-10">Transfer to Other Bank</p>
      <div  class="">
        <p class="pb-2 font-bold dark:text-primary-200 text-primary-800">Select Bank Name</p>
        <select #selBankList (change)="selectBankName($event)" [(ngModel)]="selectedBank"
                class="text-primary-700 dark:text-primary-300 min-w-[250px] px-4 py-2 text-lg ring-1 dark:ring-primary-400 ring-primary-600 rounded-lg">
          @for(bank of listOfBanks() ; track bank.bankId){
            <option [ngValue]="bank" class="dark:bg-surface-800">{{ bank.bankName }}</option>
          }


        </select>
        <div class="mt-3 p-2">
          <button (click)="logElem(selBankList)">Log Element</button>
          <h1>{{selectedBank?.bankName}}</h1>

        </div>

      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntraBankTransfer {

  selectedBank!:BankInfoModel;
  private mappedBankList :BankInfoModel[] = knownBankList.map(item => {
    return {
      bankId : item.id,
      bankCode : item.code,
      bankName : item.name
    }
  }) ;
  listOfBanks = signal<BankInfoModel[]>(this.mappedBankList);
  logElem(elem: HTMLElement) {
    console.log(elem);
  }

  protected selectBankName(evt: Event) {
    console.log("SELECT BANK LIST onChange Event =>" ,this.selectedBank);
  }
}
