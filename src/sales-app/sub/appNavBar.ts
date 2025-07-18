import {Component, inject} from '@angular/core';
import {MenuStateService} from '../services/MenuStateService';
import {AppLogo} from './AppLogo';
import {NavMenu} from './NavMenu';
import {SignOut} from './SignOut';

@Component({
  selector: 'AppNavBar, app-navbar, app-nav-bar, appNavBar',
  host: {},
  imports: [
    AppLogo,
    NavMenu,
    SignOut
  ],
  standalone: true,
  template: `
    @if (menuState.showMenu()) {
      <div class=" w-[60px] z-20 bg-primary-200 dark:bg-surface-900
        md:w-[85px] flex flex-col items-center justify-between
        me-2 p-3 fixed top-0 bottom-0 left-0">
        <div class="flex flex-col items-center">
          <AppLogo />


          <NavMenu [isActive]="true" iconClass="las la-phone-volume" />
          <NavMenu iconClass="las la-piggy-bank" />
          <NavMenu iconClass="las la-chart-pie"/>
          <NavMenu iconClass="las la-user-lock"/>
          <NavMenu iconClass="las la-tools"/>

        </div>

        <SignOut />

      </div>
    }
  `
})
export class AppNavBar {
  menuState = inject(MenuStateService);
}
