import {Component, inject} from '@angular/core';
import {MenuStateService} from '../services/MenuStateService';
@Component({
  selector: "AppLogo",
  standalone: true,
  template: `
    <div class=" size-[56px] md:size-16 mt-3 mb-10 bg-white rounded-full grid place-content-center">
      <ng-content>
        <i class="la-bell-o la la-2x"></i>
      </ng-content>
    </div>
  `
})
export class AppLogo{

}
@Component({
  selector: 'AppNavBar',
  host: {},
  imports: [
    AppLogo
  ],
  standalone: true,
  template: `
    @if (menuState.showMenu()) {
      <div class=" w-[60px] z-20
        md:w-[85px] flex flex-col items-center justify-between
        me-2 p-3 fixed top-0 bottom-0 left-0">
        <div class="flex flex-col items-center">
          <AppLogo />

          <a href="#" class="size-[45px] md:size-[55px] mt-3
         hover:text-blue-500 hover:ring-1 hover:ring-offset-blue-600 duration-300

         bg-white rounded-full flex justify-center items-center">
            <i class="la-amazon-pay lab la-2x "></i>
          </a>
          <a href="#" class="size-[45px] md:size-[55px] mt-3 text-orange-500
        hover:text-cyan-600 hover:ring-1 hover:ring-offset-cyan-600 duration-300
        bg-white rounded-full flex justify-center items-center">
            <i class="las la-cart-plus la-2x"></i>
          </a>
          <a href="#" class="size-[45px] md:size-[55px] mt-3 bg-white rounded-full flex justify-center items-center">AB</a>
          <a href="#" class="size-[45px] md:size-[55px] mt-3 bg-white rounded-full flex justify-center items-center">AB</a>
        </div>

        <button href="#" title="Sign out" class="size-[45px] md:size-[55px] mt-3
       hover:text-red-500 hover:ring-1 hover:ring-offset-red-600 duration-300
      bg-white rounded-full flex justify-center items-center">

          <i class="la-sign-out la la-2x "></i>
        </button>

      </div>
    }
  `
})
export class AppNavBar {
  menuState = inject(MenuStateService);
}
