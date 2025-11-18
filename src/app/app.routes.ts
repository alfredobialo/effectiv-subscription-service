import {Routes} from '@angular/router';
import {PageNotFound} from './pages/page-not-found';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./pages/dashboard-page")
      .then(x => x.DashboardPage),
    title: "Dashboard"

  },
  {
    path: "sales-dashboard",
    loadComponent: () => import("./pages/sales-page")
      .then(x => x.SalesPage),
    title: "Sales Dashboard",
    children : []
  },
  {
    path:"",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path:"**",
    component: PageNotFound,
    title: "Page Not Found",
  }
];
