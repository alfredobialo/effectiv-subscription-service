import {Component, computed, signal} from '@angular/core';

import {componentCreatedAnimation} from '../../../shared/animations/CustomAnimations';

@Component({
  selector: 'ManageWarehouses',
  imports: [],
  template: `
    <div class="relative">
      <h1 class="text-capitalize">manage-warehouses works!</h1>
        <img [src]="mainImg" class="w-[300px] duration-300 transition-all">

    </div>

  `,
  styles: `

  `,
  animations: [
    componentCreatedAnimation
  ],
  host: {
    "[@cmp-enter]": "true",
    "class": "p-8 text-2xl block",
    "ngSkipHydration": "true"
  }
})
export class ManageWarehouses {
  img1 = "images/munachi-ads-02.png";
  img2 = "images/chioma-iwuh2.jpg";
  mainImg = this.img1;

  swapImages() {
  }
}
