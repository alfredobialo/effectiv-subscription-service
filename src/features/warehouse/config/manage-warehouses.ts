import {Component, computed, signal} from '@angular/core';

import {componentCreatedAnimation} from '../../../shared/animations/CustomAnimations';

@Component({
  selector: 'ManageWarehouses',
  imports: [],
  template: `
    <div class="relative">
      <h1>manage-warehouses works!</h1>

        <img [src]="mainImg" class="w-[300px] duration-300 transition-all"
             (mousemove)="showMagnifiedImage($event)" (mouseleave)="showZoomedImage.set(false)">
        <br>

      @if(showZoomedImage()){
        <div   class="zoomed-image hidden xl:block duration-300 absolute left-[400px] top-10 backdrop-blur-2xl shadow-2xl ">
         <img [src]="mainImg" alt="" class="scale-[200%]">
        </div>
      }


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



  protected showZoomedImage = signal(false);
  protected showMagnifiedImage(evt: MouseEvent) {
    this.showZoomedImage.set(true);
    const zoomedImage = evt.target as HTMLImageElement;
  }
}
