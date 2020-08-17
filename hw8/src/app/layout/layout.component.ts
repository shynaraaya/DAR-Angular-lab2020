import {Component} from '@angular/core';
import {NavItem} from '../shared/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent{
  navItems: NavItem[] = [
    {
      title: 'Users',
      enabled: true,
      url: '/users'
    },
    {
      title: 'Videos',
      enabled: false,
      url: '/videos',
    },
    {
      title: 'Rooms',
      enabled: true,
      url: '/rooms'
    }
  ];

}
