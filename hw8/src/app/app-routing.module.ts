import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LayoutComponent} from './layout/layout.component';
import {UserComponent} from './users/user/user.component';
import {LoginComponent} from './auth/auth-login/login.component';



const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
