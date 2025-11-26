import {Routes} from '@angular/router';
import {NewSalesOrder} from './components/new-sales-order';

export const salesRoutes: Routes = [
  {
    path: 'sales-order/new',
    loadComponent : () =>  import("./components/new-sales-order").then(x => x.NewSalesOrder),
    title: 'New Sales Order'
  },
  {
    path: 'sales-order/view/:id',
    loadComponent : () =>  import("./components/new-sales-order").then(x => x.NewSalesOrder),
    title: 'View Sales Order',
    data: { visible : false}
  },
  {
    path: 'customers',
    loadComponent : () =>  import("./components/customer-list").then(x => x.CustomerList),
    title: 'All Customer List'
  },
  {
    path: 'customers/new',
    loadComponent : () =>  import("./components/new-customer").then(x => x.NewCustomer),
    title: 'New Customer'
  },


];
