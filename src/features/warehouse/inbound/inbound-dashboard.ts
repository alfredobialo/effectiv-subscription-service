import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'inbound-dashboard, WarehouseInBoundDashboard',
  imports: [CommonModule],
  template: `
    <h1>Inbound : {{inboundList.length}}</h1>
    <p>
      inbound-dashboard works!
    </p>

    <div class="">
      @for(w of inboundList; track  w.warehouseId) {
        <div class="rounded-lg p-4 mb-3 dark:bg-surface-700 shadow-2xs bg-primary-200 h-32">
          <span>Warehouse Name </span>
          <span class="font-bold">{{ w.warehouseName }}</span>
          <p class="">Total Inbound: <span>{{w.inbound | number}}</span></p>
        </div>
      }

      <div class="flex gap-1 relative">
        @for(abc of [1,2,3,4]; track abc) {
          <a class="size-16 ring-2 ring-white dark:bg-primary-700 bg-surface-300 rounded-full flex justify-center items-center absolute "
             [style]="getCssPos($index, $count)"
          >{{abc}}</a>
        }
      </div>

    </div>
  `,
  styles: ``
})
export class InboundDashboard {

  inboundList = [
    {
      warehouseId: "WH-Ajah001",
      warehouseName: "Warehouse - AJAH-001",
      inbound : 300000,
      date: new Date(),

    },{
      warehouseId: "WH-Lekki001",
      warehouseName: "Warehouse - Lekki-001",
      inbound : 4,
      date: new Date(),

    },{
      warehouseId: "WH-MainLand003",
      warehouseName: "Warehouse - Mainland-003",
      inbound : 17,
      date: new Date()

    },{
      warehouseId: "WH-Badore004",
      warehouseName: "Warehouse Badore-003",
      inbound :56,
      date: new Date()

    }
  ];
  protected  getCssPos(index:number, count:number, elmWidth:number = 64) {
    const knownCss = ["left-[0px]", "left-[15px]","left-[20px]","left-[25px]","left-[30px]","left-[45px]"]
    const pos = { left: `${index > 0 ? (elmWidth - 40) + (index * (count*5)) : 0}px ` };
    return pos;
  }
}
