import { Component, Input } from '@angular/core';
import {SideNavItem} from '../shared/types';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input()
  sideNavItems: SideNavItem[] = [];

}
