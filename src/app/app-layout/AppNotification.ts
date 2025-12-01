import {Component, input, numberAttribute} from '@angular/core';

@Component({
  selector: 'AppNotification',
  host: {
    "[class]" :"{'!text-surface-500':beep() === 0}",
    "tabindex" :"3",
    "class" :`xl:size-[48px] size-[45px] 2xl:size-[50px] flex justify-center items-center rounded-full hover:bg-surface-300/20
  dark:hover:bg-white/20 duration-200 cursor-pointer dark:text-primary-400 text-primary-600  relative `
  },
  template: `
    <ng-container>
      <i class="la la-bell la-2x "></i>
      @if(beep() > 0){
        <div [class]="{'text-[14px]':beep() > 9}" class="size-6  bg-red-600 text-white absolute right-[2px]  -top-[3px] rounded-full flex items-center justify-center ">
           {{(beep() > 99 ?  "99+": beep()) }}
         </div>
      }
    </ng-container>
  `
})
export class AppNotification {
  beep = input(0, { transform : numberAttribute})
}
