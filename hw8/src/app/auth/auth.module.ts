import {NgModule} from '@angular/core';
import {LoginComponent} from './auth-login/login.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginComponent
  ],
})

export class AuthModule{}
