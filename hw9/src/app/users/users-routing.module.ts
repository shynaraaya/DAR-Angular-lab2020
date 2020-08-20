import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './users/users.component';
import {Route, RouterModule} from '@angular/router';

const routes = [
  {
    path: ':id',
    component: UserComponent,
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
