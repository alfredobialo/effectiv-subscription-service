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
    <div class="call-to-action">
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
