import { Component } from '@angular/core';

@Component({
  selector: 'ManageWarehouses',
  imports: [],
  template: `
    <p>
      manage-warehouses works!
      <img [src]="mainImg" class="w-[300px] duration-300 transition-all" >
      <button class="px-3 py-1.5 bg-blue-500 text-white rounded-md mt-1" (click)="swapImages()">Swap Images</button>
    </p>
  `,
  styles: ``
})
export class ManageWarehouses {
  img1 = "images/munachi-ads-02.png";
  img2 = "images/chioma-iwuh2.jpg";
  mainImg  = this.img1;
  swapImages(){
  }
}
