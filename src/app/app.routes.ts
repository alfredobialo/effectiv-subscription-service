import {Routes} from '@angular/router';

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
  }
];
