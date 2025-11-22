import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  host: {
    'class': 'flex justify-center items-center  w-full h-full',
  },
  selector: 'page-not-found',
  imports: [
    RouterLink
  ],
  template: `
    <div class="flex justify-items items-center flex-col">
      <span class="accent-yellow-300"><i class="la-6x las la-exclamation-triangle"></i></span>
      <h2 class="dark:text-white/50 text-red-400 text-[4rem]">Page Not Found</h2>
      <p class="text-2xl">Are you missing Something?</p>
      <div class="text-xl">
        <a routerLink="/dashboard" class="">Dashboard</a>
      </div>
    </div>
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFound {

}
