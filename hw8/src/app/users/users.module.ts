import { NgModule } from '@angular/core';

import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {UsersRoutingModule} from './users-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    UsersComponent,
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
