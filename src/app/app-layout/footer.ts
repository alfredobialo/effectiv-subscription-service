import {Component, signal, VERSION} from '@angular/core';
import {DialogBase} from '../../shared/components/DialogComponentBase';

@Component({
  selector: 'AppFooter',
  standalone: true,
  imports: [
    DialogBase
  ],
  template: `
    <div
      class="mt-4 rounded-tl-2xl rounded-tr-2xl  p-5 md:p-8 min-h-52 dark:bg-surface-600 bg-surface-400 dark:text-gray-400 text-neutral-200">
      <h2 class="md:text-3xl text-lg">About the Company</h2>
      <span class="text-md">Angular v{{ngVersion()}}</span>
      <div class="">
        <DialogBase />
      </div>
    </div>
  `
})
export class AppFooter {
  useSmallFont = signal(false);
  ngVersion = signal<string>(VERSION.full);
}
