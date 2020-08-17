export interface NavItem {
  title: string;
  enabled: boolean;
  url: string;
}

export interface SideNavItem {
  title: string;
  enabled: boolean;
  url: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
}

export interface Company {
  name: string;
}

