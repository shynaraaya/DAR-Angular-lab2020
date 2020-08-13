import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {User} from '../../shared/types';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit{

  users: User[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          console.log('Error trying get Users', err);
          return of([]);
        }),
      )
      .subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }

  navigateToUser(id: number) {
    this.router.navigate(['/users', id]);
  }

}
