import {Component, inject, output} from '@angular/core';
import {MenuStateService} from '../../app/app-layout/MenuStateService';
import {AppNotification} from '../../app/app-layout/AppNotification';

@Component({
  standalone: true,
  selector: 'CurrentUserInfo',
  imports: [
    AppNotification
  ],
  template: `
    <div class="flex min-w-xs gap-x-6 justify-end items-center py-2 px-2 md:px-3">
      <AppNotification beep="5" />
      <button class="xl:size-[48px] size-[45px] 2xl:size-[50px] flex justify-center items-center rounded-full hover:bg-surface-300/20
  dark:hover:bg-white/20 duration-200 cursor-pointer dark:text-primary-400 text-primary-600  relative "
              (click)="toggleDarkMode()">
        <i class="las la-2x la-moon"></i>
      </button>
      <button (click)="toggleMenu()"
              class="xl:size-[48px] size-[45px] 2xl:size-[50px] flex justify-center items-center rounded-full hover:bg-surface-300/20
  dark:hover:bg-white/20 duration-200 cursor-pointer dark:text-primary-400 text-primary-600  relative xl:hidden">
        <i class="la la-bars la-2x"></i>
      </button>
    </div>
  `
})
export class CurrentUserInfo {
  menuState = inject(MenuStateService);
  showMenu = this.menuState.showMenu;

  onMenuToggle = output<boolean>();
  toggleMenu() {
    if(this.showMenu()) {
      this.menuState.showMenu.set(false);
    }
    else{
      this.menuState.showMenu.set(true);
    }
    console.log("Menu State is : " + this.menuState.showMenu());
    this.onMenuToggle.emit(this.showMenu());
  }

  toggleDarkMode() {
    const darkModeClass= "theme";
    document.querySelector("html")
      ?.classList.toggle(darkModeClass);
  }
}
