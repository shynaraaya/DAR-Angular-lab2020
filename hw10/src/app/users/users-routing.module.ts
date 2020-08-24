import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './users/users.component';
import {Route, RouterModule} from '@angular/router';
import {UserDetailResolver} from './services/userDetail.resolver';
import {UsersFormComponent} from './users-form/users-form.component';

const routes = [
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserDetailResolver,
    }
  },
  {
    path: 'form/:id',
    component: UsersFormComponent,
    resolve: {
      userDetails: UserDetailResolver,
    }
  },

  {
    path: '',
    component: UsersComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {}
