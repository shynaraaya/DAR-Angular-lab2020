import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/types';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]>{
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          console.log('Error trying get Users', err);
          return of([]);
        }),
      );
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        catchError((err) => {
          console.log('Error trying get User', err);
          return throwError(err);
        })
      );
  }
}
