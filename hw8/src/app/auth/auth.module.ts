import {NgModule} from '@angular/core';
import {LoginComponent} from './auth-login/login.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent
  ],
})

export class AuthModule{}
