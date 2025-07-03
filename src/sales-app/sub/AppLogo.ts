import {Component} from '@angular/core';

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
