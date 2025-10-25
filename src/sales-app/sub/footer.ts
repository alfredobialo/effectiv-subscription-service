import {Component, signal} from '@angular/core';

@Component({
  selector: 'AppFooter',
  standalone: true,
  template: `
    <div class="mt-4 rounded-tl-2xl rounded-tr-2xl  p-5 md:p-8 min-h-52 dark:bg-surface-600 bg-surface-400 dark:text-gray-400 text-neutral-200">
      <h2 class="md:text-3xl text-lg">About the Company</h2>
      <div class="">

      </div>
    </div>
  `
})
export class AppFooter {
  useSmallFont = signal(false);
}
