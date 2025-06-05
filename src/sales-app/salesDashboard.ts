import {Component} from '@angular/core';
import {AppNavBar} from './sub/appNavBar';
import {AppUserNavbar} from './sub/appUserNavbar';
import {AppFooter} from './sub/footer';
import {AppPageBody} from './sub/AppPageBody';

@Component({
  selector: 'SalesDashboard',
  template: `
    <div class=" flex min-h-screen ">
      <AppNavBar />
      <div class=" py-2 px-3 grow-1 ms-[60px] md:ms-[85px] overflow-x-hidden">
        <AppUserNavbar />
        <AppPageBody />
        <AppFooter />

      </div>
    </div>

  `,
  imports: [
    AppNavBar, AppUserNavbar, AppFooter, AppPageBody
  ]
})
export class SalesDashboard {
}
