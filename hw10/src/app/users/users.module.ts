import { NgModule } from '@angular/core';

import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {UsersRoutingModule} from './users-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailResolver} from './services/userDetail.resolver';
import { UsersFormComponent } from './users-form/users-form.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UsersComponent,
    UserComponent,
  ],
  providers: [
    UserService,
    UserDetailResolver,
  ]
})
export class UsersModule { }
