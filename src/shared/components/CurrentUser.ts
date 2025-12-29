import {Component, inject, output, signal} from '@angular/core';
import {MenuStateService} from '../../app/app-layout/MenuStateService';
import {AppNotification} from '../../app/app-layout/AppNotification';
import ThemeSelector from '../../themes/theme-selector';
@Component({
  standalone: true,
  selector: 'CurrentUserInfo',
  imports: [
    AppNotification,
    ThemeSelector,
  ],
  template: `
    <div class="flex min-w-xs gap-x-6 justify-end items-center py-2 px-2 md:px-3">
      <ThemeSelector />
      <AppNotification beep="5" />
      <button class="btn-circle"
              (click)="toggleDarkMode()">
        <i class="las la-2x la-moon"></i>
      </button>
      <button (click)="toggleMenu()"
              class="btn-circle xl:hidden">
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
