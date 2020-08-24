import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoComponent } from './logo/logo.component';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {LayoutComponent} from './layout/layout.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    LogoComponent,
    NotFoundComponent,
    LayoutComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      SharedModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
