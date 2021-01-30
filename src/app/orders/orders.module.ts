import { OdersListComponent } from './oders-list/oders-list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule],
  declarations: [OdersListComponent],
})
export class OrdersModule {}
