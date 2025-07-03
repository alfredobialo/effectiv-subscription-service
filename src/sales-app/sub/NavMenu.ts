import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'NavMenu',
  template: `
    <a href="#" class="size-[45px] md:size-[55px] mt-3
         hover:text-blue-500 hover:ring-1 hover:ring-offset-blue-600 duration-300

         bg-white rounded-full flex justify-center items-center">
    <i class="la-amazon-pay lab la-2x "></i>
  </a>`
})
export class NavMenu {
}
