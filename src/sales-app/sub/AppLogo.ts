import {Component} from '@angular/core';

@Component({
  selector: "AppLogo, app-logo",
  standalone: true,
  template: `
    <div class=" overflow-hidden size-[56px] md:size-16 mt-3 mb-10 bg-white rounded-full grid place-content-center">
      <ng-content>
        <i class="la-bell-o la la-2x"></i>
      </ng-content>
    </div>
  `
})
export class AppLogo{

}
