import {Component} from '@angular/core';

@Component({
  selector: "AppLogo, app-logo",
  standalone: true,
  template: `
    <div class=" overflow-hidden size-[56px] md:size-16 mt-3 mb-10 bg-white rounded-full grid place-content-center">
      <img src="./images/logos/asomer-icone-lg.png" alt="" width="55px" class="object-fill rounded-full">
    </div>
  `
})
export class AppLogo{

}
