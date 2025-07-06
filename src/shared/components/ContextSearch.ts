import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'ContextSearch, context-search, search',
  template: `
    <div class="w-[250px] shadow dark:bg-surface-700 duration-300 has-focus:dark:bg-surface-900 bg-white md:w-[380px] lg:w-[450px] py-1 rounded-[100vh] flex items-center">
      <span class="text-lg ms-2 me-2 grow-0 text-gray-400"><i class="la la-search"></i></span>
      <input type=" text" placeholder="Start searching here..."
             class="placeholder:text-gray-400 text-lg  grow-1 py-1 me-1 text-gray-500 dark:text-white outline-none">
    </div>`
})
export class ContextSearch {
}
