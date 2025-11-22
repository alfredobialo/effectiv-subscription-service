import {Component, input, numberAttribute} from '@angular/core';

@Component({
  selector: 'AppNotification',
  template: `
    <div [class]="{'!text-surface-500':beep() === 0}" class="size-[43px] 2xl:size-[50px] flex justify-center item-center rounded-full hover:bg-surface-300/20 dark:hover:bg-white/20 duration-200 cursor-pointer dark:text-primary-400 text-primary-600  relative" tabindex="3" aria-roledescription="Notification">
      <i class="la la-bell la-2x "></i>
      @if(beep() > 0){
        <div [class]="{'text-[14px]':beep() > 9}" class="size-6  bg-red-600 text-white absolute -right-1  -top-[7px] rounded-full flex items-center justify-center ">
           {{(beep() > 99 ?  "99+": beep()) }}
         </div>
      }
    </div>
  `
})
export class AppNotification {
  beep = input(0, { transform : numberAttribute})
}
