import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {componentCreatedAnimation} from '../../../shared/animations/CustomAnimations';

@Component({
  selector: 'ManageWarehouses',
  imports: [ButtonModule],
  template: `

    <p>
      manage-warehouses works!
      <img [src]="mainImg" class="w-[300px] duration-300 transition-all" >
      <br>
      <p-button label="Testing PrimeNg"></p-button>
    </p>
  `,
  styles: `

  `,
  animations: [
    componentCreatedAnimation
  ],
  host: {
    "[@cmp-enter]": "true",
    "class" : "p-8 text-2xl block"
  }
})
export class ManageWarehouses {
  img1 = "images/munachi-ads-02.png";
  img2 = "images/chioma-iwuh2.jpg";
  mainImg  = this.img1;
  swapImages(){
  }
}
