import {Component, inject} from '@angular/core';
import {MenuStateService} from '../services/MenuStateService';
import {AppLogo} from './AppLogo';
import {NavMenu} from './NavMenu';
import {SignOut} from './SignOut';

@Component({
  selector: 'AppNavBar',
  host: {},
  imports: [
    AppLogo,
    NavMenu,
    SignOut
  ],
  standalone: true,
  template: `
    @if (menuState.showMenu()) {
      <div class=" w-[60px] z-20
        md:w-[85px] flex flex-col items-center justify-between
        me-2 p-3 fixed top-0 bottom-0 left-0">
        <div class="flex flex-col items-center">
          <AppLogo />

          <NavMenu />
          <NavMenu />
          <NavMenu />
          <NavMenu />
          <NavMenu />

        </div>

        <SignOut />

      </div>
    }
  `
})
export class AppNavBar {
  menuState = inject(MenuStateService);
}
