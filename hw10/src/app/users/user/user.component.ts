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
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe(({user}) => {
        this.user = user;
      });
  }
}
