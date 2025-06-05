import {Component} from '@angular/core';

@Component({
  selector: 'AppPageBody',
  template: `
    <div class="h-full  mt-[60px] bg-white grid place-items-center rounded-2xl">
      <div class="size-16 rounded-full text-white bg-teal-600 grid place-items-center notify">
        <i class="las la-cart-plus la-3x"></i>
      </div>
    </div>
  `
})
export class AppPageBody {
}
