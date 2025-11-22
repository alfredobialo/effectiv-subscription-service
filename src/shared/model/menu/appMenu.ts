export interface IAppMenu {
  title: string,
  routePath: string,
  component: any,
  params?: string,
  iconClass?: string
  index?: number,
  isActive: boolean
}

class AppMenuHelper {
  public static getMenus(): IAppMenu[] {
    return [
      {
        title: "Dashboard",
        routePath: "dashboard",
        component: "dashboard-page",
        index: 0,
        isActive: true,
        iconClass:"la-layer-group"
      },
      {
        title: "Sales Dashboard",
        routePath: "sales-dashboard",
        component: "sales-page",
        index: 1,
        isActive: true,
        iconClass: "la-cart-plus"
      },
      {
        title: "Purchases Dashboard",
        routePath: "purchase-dashboard",
        component: "purchases-page",
        isActive: true,
        iconClass : "la-money-check-alt",
        index: 2
      },
      {
        title: "Inventory Dashboard",
        routePath: "inventory-dashboard",
        component: "inventory-page",
        index: 3,
        isActive: true,
        iconClass : "la-industry"
      },
      {
        title: "Project Dashboard",
        routePath: "project-dashboard",
        component: "projects-page",
        index: 4,
        isActive: true,
        iconClass : "la-suitcase"
      },
      {
        title: "Financial Accounting",
        routePath: "finance-dashboard",
        component: "finance-page",
        index:5,
        isActive: true,
        iconClass : "la-balance-scale-left"
      },
      {
        title: "App Security Manager",
        routePath: "security-dashboard",
        component: "security-page",
        index:6,
        isActive: true,
        iconClass : "la-key"
      },
    ];
  }
}

export default AppMenuHelper

