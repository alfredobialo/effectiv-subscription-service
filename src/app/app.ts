import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BlitzTopNav} from '../b-components/blitzTopNav';
import {BlitzBanner} from '../b-components/blitzBanner';
@Component({
  selector: 'BlitzApp',
  imports: [RouterOutlet, BlitzTopNav, BlitzBanner],
  template: `
    <div class="relative overflow-hidden  min-h-screen rounded-xl shadow-xl bg-white mx-auto w-[96%] mt-[2vw] px-6 py-4 4k:w-[1920px] fhd:w-[70%] hd:w-[85%]">
      <BlitzTopNav />
      <BlitzBanner />
      <router-outlet />
    </div>
  `
})
export class BlitzApp {
  protected title = 'effectiv-subscription-service';
}
