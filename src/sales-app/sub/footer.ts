import {Component, signal} from '@angular/core';

@Component({
  selector: 'AppFooter',
  standalone: true,
  template: `
    <div class="mt-4 rounded-tl-2xl rounded-tr-2xl  p-5 md:p-8 min-h-52 dark:bg-surface-900 bg-primary-100 dark:text-gray-400 text-gray-700">
      <h2 class="md:text-3xl text-lg">Footer</h2>
    </div>
  `
})
export class AppFooter {
  useSmallFont = signal(false);
}
