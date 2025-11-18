import {Component} from '@angular/core';
import {ContextSearch} from '../../shared/components/ContextSearch';
import {CurrentUserInfo} from '../../shared/components/CurrentUser';

@Component({
  selector: 'AppUserNavbar',
  standalone: true,
  imports: [
    ContextSearch,
    CurrentUserInfo
  ],
  template: `
    <div class="h-[60px] dark:bg-surface-950  bg-slate-200 z-10  flex justify-between items-center sticky duration-300 top-0 ">
      <ContextSearch />
      <CurrentUserInfo />
    </div>
  `
})
export class AppUserNavbar {

}
