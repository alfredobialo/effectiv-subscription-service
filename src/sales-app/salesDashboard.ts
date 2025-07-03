import {Component, computed, inject} from '@angular/core';
import {AppNavBar} from './sub/appNavBar';
import {AppUserNavbar} from './sub/appUserNavbar';
import {AppFooter} from './sub/footer';
import {AppPageBody} from './sub/AppPageBody';
import {MenuStateService} from './services/MenuStateService';

@Component({
  selector: 'SalesDashboard',
  template: `
    <div class=" flex min-h-screen ">
      <AppNavBar />
      <div class="  px-3 grow-1  overflow-x-hidden duration-300" [class]="{'ms-[60px]': menuState.showMenu()}"
           [class]="{'md:ms-[85px]': menuState.showMenu()}">
        <AppUserNavbar />
        <AppPageBody />
        <AppFooter />

      </div>
    </div>

  `,
  standalone: true,
  imports: [
    AppNavBar, AppUserNavbar, AppFooter, AppPageBody
  ]
})
export class SalesDashboard {
  constructor( public menuState: MenuStateService) {
   /* menuState = inject(MenuStateService);*/

  }
  expand = computed(() => {
    return this.menuState.showMenu();
  });

}
