import { OdersDetailComponent } from './oders-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OdersDetailChildComponent } from './oders-detail-child/oders-detail-child.component';

const routes: Routes = [
  {
    path: '',
    component: OdersDetailComponent,
    children: [
      {
        path: 'child',
        component: OdersDetailChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdersDetailRoutingModule {}
