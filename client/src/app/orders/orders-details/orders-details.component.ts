import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';
import { IOrder } from '../../shared/models/order';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
  order: IOrder;

  constructor(private orderService: OrdersService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@orderDetails', ' ');
  }

  ngOnInit(): void {
    this.getOrderDetail();
  }

  getOrderDetail() {
    this.orderService.getOrderDetail(+this.activateRoute.snapshot.paramMap.get('id')).subscribe((order: IOrder) => {
      this.order = order;
      this.bcService.set('@orderDetails', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

}
