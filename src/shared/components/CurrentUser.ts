import {Component, inject, output} from '@angular/core';
import {MenuStateService} from '../../app/app-layout/MenuStateService';

@Component({
  standalone: true,
  selector: 'CurrentUserInfo',
  template: `
    <div class="flex min-w-xs gap-x-6 justify-end items-center py-2 px-2 md:px-3">
      <button class="size-12 rounded-full dark:bg-surface-800 bg-primary-700 cursor-pointer text-white"
      (click)="toggleDarkMode()" >
        <i class="las la-2x la-moon"></i>
      </button>
      <button (click)="toggleMenu()"
              class="px-4 py-2 bg-amber-600 ring-amber-600 ring-2 rounded-full cursor-pointer
               hover:bg-amber-800 hover:ring-amber-400 duration-300 text-md  font-semibold">
        <i class="la la-bell-o"></i> {{ showMenu() }}
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
