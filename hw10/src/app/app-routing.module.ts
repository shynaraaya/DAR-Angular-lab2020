import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LayoutComponent} from './layout/layout.component';
import {UserComponent} from './users/user/user.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './shared/auth.guard';
import {AuthModule} from './auth/auth.module';



const routes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
