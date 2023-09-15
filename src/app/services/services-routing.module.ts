import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ChargeServicesComponent } from './pages/charge-services/charge-services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'list',
        component: ServicesListComponent,
      },
      {
        path: 'charge',
        component: ChargeServicesComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
