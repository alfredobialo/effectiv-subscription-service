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
    path: "crm-dashboard",
    loadComponent: () => import("./pages/crm-dashboard-page")
      .then(x => x.CrmDashboardPage),
    title: "Crm Dashboard",
    children : []
  },
  {
    path: "inventory-dashboard",
    loadComponent: () => import("./pages/inventory-page")
      .then(x => x.InventoryPage),
    title: "Inventory Dashboard",
    children : []
  },
  {
    path: "project-dashboard",
    loadComponent: () => import("./pages/projects-page")
      .then(x => x.ProjectsPage),
    title: "Project Dashboard",
    children : []
  },
  {
    path: "purchase-dashboard",
    loadComponent: () => import("./pages/purchase-page")
      .then(x => x.PurchasePage),
    title: "Purchase Manager Dashboard",
    children : []
  },
  {
    path: "finance-dashboard",
    loadComponent: () => import("./pages/finance-page")
      .then(x => x.FinancePage),
    title: "CFO Dashboard",
    children : []
  },
  {
    path: "security-dashboard",
    loadComponent: () => import("./pages/security-page")
      .then(x => x.SecurityPage),
    title: "Application Security Dashboard",
    children : [],
    canActivate : [ (activeRouteInfo, routerState) => {
      console.log("ROUTER CAN ACTIVATE Guard", activeRouteInfo, routerState);
      return true;
    }]
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
