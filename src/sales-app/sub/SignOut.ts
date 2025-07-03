import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'SignOut',
  template: `
    <button href="#" title="Sign out" class="size-[45px] md:size-[55px] mt-3
       hover:text-red-500 hover:ring-1 hover:ring-offset-red-600 duration-300
      bg-white rounded-full flex justify-center items-center">

      <i class="la-sign-out la la-2x "></i>
    </button>
  `
})
export class SignOut {
}
