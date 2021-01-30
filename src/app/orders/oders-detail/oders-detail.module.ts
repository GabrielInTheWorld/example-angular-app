import { NgModule } from '@angular/core';
import { OdersDetailChildComponent } from './oders-detail-child/oders-detail-child.component';
import { OdersDetailRoutingModule } from './oders-detail-routing.module';
import { OdersDetailComponent } from './oders-detail.component';

@NgModule({
  imports: [OdersDetailRoutingModule],
  declarations: [OdersDetailComponent, OdersDetailChildComponent],
})
export class OdersDetailModule {}
