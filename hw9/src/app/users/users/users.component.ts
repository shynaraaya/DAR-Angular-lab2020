import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/types';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit{

  users$: Observable<User[]>;
  searchInput = '';

  constructor(
    private userService: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.users$ = this.userService.getUsers()
      .pipe(
        map(users => this.searchInput ?
          users.filter(user => user.name.includes(this.searchInput) || user.username.includes(this.searchInput))
          : users)
      );
  }


  navigateToUser(id: number) {
    this.router.navigate(['/users', id]);
  }

  search() {
    console.log(this.searchInput);
    this.getData();
  }

  clearSearchInput() {
    this.searchInput = '';
    this.getData();
  }


}
