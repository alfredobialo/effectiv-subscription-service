import { Component } from '@angular/core';
import {BlitzTopNav} from './blitzTopNav';
import {BlitzBanner} from './blitzBanner';
@Component({
  selector: 'BlitzApp',
  imports: [BlitzTopNav, BlitzBanner],
  template: `
      <div class="relative overflow-hidden  min-h-screen rounded-xl shadow-xl bg-white mx-auto w-[96%] mt-[2vw] px-6 py-4 4k:w-[1920px] fhd:w-[70%] hd:w-[85%]">
        <BlitzTopNav />
        <BlitzBanner />
      </div>

  `
})
export class BlitzApp {
  constructor() {
  }

}
