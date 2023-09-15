import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [NavBarComponent, SideBarComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [NavBarComponent, SideBarComponent],
})
export class SharedModule {}
