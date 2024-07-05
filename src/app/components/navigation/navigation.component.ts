import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Permissions } from 'src/app/models/permissions';
import { Roles } from 'src/app/models/roles';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  currentUser: User | null = null;
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser$.subscribe(user => this.currentUser = user);
    this.userService.users$.subscribe(users => this.users = users);
  }

  assumeRole(user: User) {
    this.userService.setCurrentUser(user);
    alert(`Admin has assumed the role of ${user.name}`);
  }

  canViewRoute(route: string): boolean {
    if (this.currentUser?.role === Roles.Admin) return true;

    if (this.currentUser?.role === Roles.Staff) {
      if (route === 'protected-route1' && this.currentUser.permissions.includes(Permissions.CanViewProtectedRoute1)) {
        return true;
      }
      if (route === 'protected-route2' && this.currentUser.permissions.includes(Permissions.CanViewProtectedRoute2)) {
        return true;
      }
    }

    return false;
  }
}
