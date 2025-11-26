import {Component, inject, output} from '@angular/core';
import {Route, Router,  RouterOutlet} from '@angular/router';
import {salesRoutes} from '../../sales-app/sales-routes';
import AppMenuHelper, {IAppMenu} from '../../shared/model/menu/appMenu';
import AppMenu from '../../shared/model/menu/appMenu';

@Component({
  selector: 'AppPageBody',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="h-full dark:bg-surface-900 bg-surface-50  rounded-2xl flex ">
      <div class=" dark:bg-surface-600 bg-surface-200 py-4 px-3 min-w-[200px] lg:min-w-[220px] 2xl:min-w-[280px]">

        <div class="sticky top-[95px]">
          <p class="font-bold mb-6">Left Nav Submenu</p>
          @for (r of salesSubMenus; track r.routePath ) {
            <div class="mb-2 ">
              <a (click)="gotoRoute(r)" > {{r.title}}</a>
            </div>
          }</div>

      </div>
      <div class="py-4 px-4">
        <router-outlet (activate)="onRouteActivated($event)"></router-outlet>
      </div>

    </div>
  `
})
export class AppPageBody {
  onPageTitleSet = output<string>();
  router = inject(Router);
  protected onRouteActivated($event: any) {
    let title: string = "";
    if ($event.pageTitle) {
      title = $event?.pageTitle() ?? "";
    }
    this.onPageTitleSet.emit(title);
  }
  protected salesSubMenus = AppMenuHelper.getSubmenuFor("sales-dashboard");
  protected gotoRoute(r: IAppMenu) {
    this.router.navigateByUrl(r.routePath)
      .then((res) => {
          console.log("gotoRoute", res , r.routePath);
      });
  }
}
