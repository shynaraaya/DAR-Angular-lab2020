import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {AuthInfo} from './types';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this.isLoggedIn.asObservable();

  public authInfo: AuthInfo = null;

  constructor(private httpClient: HttpClient) {
    let authInfo = null;
    try {
      authInfo = localStorage.getItem('dar-lab-auth') ?
        JSON.parse(localStorage.getItem('dar-lab-auth')) : null;

    } catch (e) {

    }

    if (authInfo) {
      this.isLoggedIn.next(true);
      this.authInfo = authInfo;
    }
  }

  setLoggedIn(authInfo: AuthInfo) {
    localStorage.setItem('dar-lab-auth', JSON.stringify(authInfo));
    this.authInfo = authInfo;
    this.isLoggedIn.next(true);
  }


  login(username: string, password: string) {
    const data = {
      grant_type: 'password',
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username,
      password,
    };
    return this.httpClient.post<AuthInfo>(`${environment.griffonApiUrl}/oauth/token`, data);
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('dar-lab-auth');
  }

  register(username: string, password: string) {
    const data = {
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username,
      password,
    };
    return this.httpClient.post<any>(`${environment.griffonApiUrl}/oauth/signup`, data);
  }
}
