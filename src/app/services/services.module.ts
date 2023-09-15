import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ChargeServicesComponent } from './pages/charge-services/charge-services.component';

@NgModule({
  declarations: [ServicesListComponent, ServicesComponent, ChargeServicesComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule, PrimeNgModule],
})
export class ServicesModule {}
