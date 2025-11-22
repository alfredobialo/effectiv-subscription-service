import {Component, output} from '@angular/core';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="h-full dark:bg-surface-900 bg-surface-50  rounded-2xl flex ">
      <div class="sticky top-20 dark:bg-surface-600 bg-surface-100 py-4 px-3 min-w-[200px] lg:min-w-[220px] 2xl:min-w-[280px]">
        <p>Left Nav Submenu</p>
      </div>
      <div class="py-4 px-4">
        <router-outlet (activate)="onRouteActivated($event)"></router-outlet>
      </div>

    </div>
  `
})
export class AppPageBody {
  onPageTitleSet = output<string>();
  protected onRouteActivated($event: any) {
    let title:string = "";
    if($event.pageTitle) {
      title  = $event?.pageTitle() ?? "";
    }
    this.onPageTitleSet.emit(title);
  }
}
