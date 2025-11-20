import {Component, output} from '@angular/core';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="h-full py-4 px-4 dark:bg-surface-900 bg-surface-50  rounded-2xl">
      <router-outlet (activate)="onRouteActivated($event)"></router-outlet>
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
