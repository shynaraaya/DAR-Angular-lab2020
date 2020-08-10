import { Component } from '@angular/core';
import {NavItem, SideNavItem} from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson6';

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
      url: ''
    }
  ];

  sideNavItems: SideNavItem[] = [
    {
      title: 'Home',
      enabled: true,
      url: '/home'
    },
    {
      title: 'Projects',
      enabled: true,
      url: '/projects',
    },
    {
      title: 'Help',
      enabled: true,
      url: '/help'
    }
  ];

}

