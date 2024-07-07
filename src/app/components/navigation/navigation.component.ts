// Import necessary Angular modules and services
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Permissions } from 'src/app/models/permissions'; // Import Permissions enum
import { Roles } from 'src/app/models/roles'; // Import Roles enum
import { UserService, User } from 'src/app/services/user.service'; // Import UserService and User interface

@Component({
  selector: 'app-navigation', // Component selector
  templateUrl: './navigation.component.html', // Component template file
  styleUrls: ['./navigation.component.scss'] // Component private CSS styles
})
export class NavigationComponent {
  currentUser: User | null = null; // Initialize currentUser as null
  users: User[] = []; // Initialize users array

  constructor(private userService: UserService, private router: Router) {
    // Subscribe to changes in currentUser and users arrays
    this.userService.currentUser$.subscribe(user => this.currentUser = user);
    this.userService.users$.subscribe(users => this.users = users);
  }

  // Method to assume role of a selected user
  assumeRole(user: User) {
    this.userService.setCurrentUser(user); // Set current user in UserService
    alert(`Admin has assumed the role of ${user.name}`); // Display alert with assumed role
  }

  // Method to check if current user can view a specific route based on role and permissions
  canViewRoute(route: string): boolean {
    if (this.currentUser?.role === Roles.Admin) return true; // Admin can access all routes

    if (this.currentUser?.role === Roles.Staff) {
      // Staff can access specific routes based on permissions
      if (route === 'protected-route1' && this.currentUser.permissions.includes(Permissions.CanViewProtectedRoute1)) {
        return true;
      }
      if (route === 'protected-route2' && this.currentUser.permissions.includes(Permissions.CanViewProtectedRoute2)) {
        return true;
      }
    }

    return false; // Default to false if no conditions match
  }

  // Toggle variable to control display of user list to assume role
  OpenUserListToAssume: boolean = true;

  // Toggle variable to control visibility of user list
  visible: boolean = false;

  // Method to toggle OpenUserListToAssume and visible variables
  onclick() {
    this.OpenUserListToAssume = !this.OpenUserListToAssume; // Toggle OpenUserListToAssume
    this.visible = !this.visible; // Toggle visible
  }
}
