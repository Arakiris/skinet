import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: ':id', component: OrdersDetailsComponent, data: {breadcrumb: {alias: "orderDetails"}}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
