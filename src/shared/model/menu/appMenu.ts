import {salesRoutes} from '../../../sales-app/sales-routes';

export interface IAppMenu {
  title: string,
  routePath: string,
  component?: any,
  params?: string,
  iconClass?: string
  index?: number,
  isActive?: boolean
  isEnabled?: boolean,
  submenu?: IAppMenu[]
}

class AppMenuHelper {
  public static getMenus(): IAppMenu[] {
    return [
      {
        title: "Dashboard",
        routePath: "dashboard",
        component: "dashboard-page",
        index: 0,
        isEnabled: true,
        iconClass: "la-layer-group"
      },
      {
        title: "Sales Dashboard",
        routePath: "sales-dashboard",
        component: "sales-page",
        index: 1,
        isEnabled: true,
        iconClass: "la-cart-plus",
        submenu : []
      },
      {
        title: "Purchases Dashboard",
        routePath: "purchase-dashboard",
        component: "purchases-page",
        isEnabled: true,
        iconClass: "la-money-check-alt",
        index: 2
      },
      {
        title: "Inventory Dashboard",
        routePath: "inventory-dashboard",
        component: "inventory-page",
        index: 3,
        isEnabled: true,
        iconClass: "la-industry"
      },
      {
        title: "Project Dashboard",
        routePath: "project-dashboard",
        component: "projects-page",
        index: 4,
        isEnabled: true,
        iconClass: "la-suitcase"
      },
      {
        title: "Financial Accounting",
        routePath: "finance-dashboard",
        component: "finance-page",
        index: 5,
        isEnabled: true,
        iconClass: "la-balance-scale-left"
      },
      {
        title: "App Security Manager",
        routePath: "security-dashboard",
        component: "security-page",
        index: 6,
        isEnabled: true,
        iconClass: "la-key"
      },
    ];
  }

  public static getSubmenuFor(parentMenuId: string) : IAppMenu[] {
    switch (parentMenuId) {
      case "sales-dashboard":
        const newMenu :IAppMenu[] = salesRoutes.map(route => {
          return {
            title: route.title?.toString() ?? "No Menu",
            routePath: `/${parentMenuId}/${route.path}`,
            isEnabled: true,
            isActive: false
          };
        })
        return newMenu;

      default:
        return [];

    }
  }
}

export default AppMenuHelper

