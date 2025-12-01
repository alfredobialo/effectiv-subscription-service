import {Component, inject, input, signal} from '@angular/core';
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
    <div class="dark:border-b-surface-600 border-b-primary-100 px-6 py-10 border-b-2 h-[60px] dark:bg-surface-950
     bg-surface-100 z-10 flex justify-between items-center sticky duration-300 top-0 ">
      <p class="font-bold text-2xl dark:text-primary-300 text-primary-900 w-[250px] lg:w-[300px]">{{ pageTitle() }}</p>
      <div class="hidden xl:flex justify-evenly items-center">
        <ContextSearch />
      </div>
      <div class="min-w-[140px] flex items-center ">
        <CurrentUserInfo />
      </div>
    </div>
  `
})
export class AppUserNavbar {
  pageTitle = input("");

}
