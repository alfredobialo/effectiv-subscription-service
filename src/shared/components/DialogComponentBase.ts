import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {JsonPipe} from '@angular/common';

@Component({
  standalone: true,
  selector: 'DialogBase',
  imports: [JsonPipe],
  template: `
    <div class="text-2xl">
      Manages Dialogs from Navigated Routes
    </div>
    <div class="text-green-600 text-shadow-2xs bg-gradient-to-br from-teal-200 to-green-400 w-[300px] h-[300px]
     tab-l:w-[500px] duration-200 rounded-2xl p-4 lg:p-6
     2k:w-[700px] 2k:h-[430px]  ring-green-800">
        <h1>Testing Router Events</h1>
      <div class="">
        <pre>
          <code>
            {{routeInfo() | json}}
          </code>
        </pre>
      </div>
    </div>
  `
})
export class DialogBase {
  private router :Router = inject(Router);
  private activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  routeInfo = signal({});
  constructor() {

    this.router.events.subscribe({
      next: event => {
        if(event instanceof NavigationStart) {
          const ns = event as NavigationStart;
          this.routeInfo.set({ route: event });
        }
      }
    })
  }
}
