import {Component, computed, inject} from '@angular/core';
import {AppFooter} from './app-layout/footer';
import {AppNavBar} from './app-layout/appNavBar';
import {AppPageBody} from './app-layout/AppPageBody';
import {AppUserNavbar} from './app-layout/appUserNavbar';
import {MenuStateService} from './app-layout/MenuStateService';

@Component({
  selector: 'App',
  imports: [
    AppFooter,
    AppNavBar,
    AppPageBody,
    AppUserNavbar,

  ],
  template: `
    <div class=" flex min-h-screen ">
      <AppNavBar />
      <div class="    grow-1  duration-300" [class]="{'ms-[60px]': menuState.showMenu()}"
           [class]="{'md:ms-[85px]': menuState.showMenu()}">
        <AppUserNavbar />
        <AppPageBody />
        <AppFooter />

      </div>
    </div>
  `
})
export class App {
  public menuState = inject(MenuStateService);
  expand = computed(() => {
    return this.menuState.showMenu();
  });


}
