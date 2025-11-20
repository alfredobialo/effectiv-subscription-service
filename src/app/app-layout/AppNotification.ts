import {Component, input, numberAttribute} from '@angular/core';

@Component({
  selector: 'AppNotification',
  template: `
    <span [class]="{'!text-surface-600':beep() === 0}" class="size-[45px] cursor-pointer dark:text-primary-400 text-primary-600  relative" tabindex="3" aria-roledescription="Notification">
      @if(beep() > 0){
        <div [class]="{'text-[14px]':beep() > 9}" class="size-6  bg-red-600 text-white absolute -right-1  -top-[18px] rounded-full flex items-center justify-center ">
           {{(beep() > 99 ?  "99+": beep()+"") }}
         </div>
      }
      <i class="la la-bell la-2x "></i>
    </span>
  `
})
export class AppNotification {
  beep = input(0, { transform : numberAttribute})
}
