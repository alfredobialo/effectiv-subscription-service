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
        iconClass: "la-cart-arrow-down"
      },
      {
        title: "Crm Dashboard",
        routePath: "crm-dashboard",
        component: "crm-page",
        index: 2,
        isActive: true,
        iconClass :"la-users"
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
        title: "Purchases Dashboard",
        routePath: "purchase-dashboard",
        component: "purchases-page",
        isActive: false,
        index: 4
      },
      {
        title: "Project Dashboard",
        routePath: "project-dashboard",
        component: "projects-page",
        index: 5,
        isActive: true,
        iconClass : "la-suitcase"
      },
    ];
  }
}

export default AppMenuHelper

