import {Component, inject, signal} from '@angular/core';
import {MenuStateService} from './MenuStateService';
import {AppLogo} from './AppLogo';
import {NavMenu} from './NavMenu';
import {SignOut} from './SignOut';
import AppMenuHelper, {IAppMenu} from '../../shared/model/menu/appMenu';

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
      <div class=" w-[60px] z-20 bg-primary-300 dark:bg-surface-700
        md:w-[85px] flex flex-col items-center justify-between
        me-2 p-3 fixed top-0 bottom-0 left-0">
        <div class="flex flex-col items-center">
          <AppLogo />
          @for(m of appMenus(); track $index){
            @if(m.isActive){
              <NavMenu [routerLink]="m.routePath" [title]="m.title" iconClass="las {{m.iconClass}}" />
            }
          }

        </div>

        <SignOut />

      </div>
    }
  `
})
export class AppNavBar {
  menuState = inject(MenuStateService);
  protected appMenus = signal<IAppMenu[]>(AppMenuHelper.getMenus());
}
