import { OdersListComponent } from './oders-list/oders-list.component';
import { OdersDetailComponent } from './oders-detail/oders-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OdersListComponent,
    children: [
      {
        path: 'detail',
        loadChildren: () =>
          import('./oders-detail/oders-detail.module').then(
            (m) => m.OdersDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class OrdersRoutingModule {}
