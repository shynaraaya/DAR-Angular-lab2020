import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/types';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from "../services/user.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.route.params // Source 1
      .pipe(
        mergeMap(param => this.userService.getUser(param.id)), // Source 2
        catchError(e => of(null))
      )
      .subscribe(user => {
        this.user = user;
      });
  }
}
