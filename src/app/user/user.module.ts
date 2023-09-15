import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UsersListComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
