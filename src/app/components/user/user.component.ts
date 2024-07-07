// src/app/components/users/users.component.ts

import { Component } from '@angular/core';
import { Permissions } from 'src/app/models/permissions';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user', // Component selector
  templateUrl: './user.component.html', // Template file for the component
  styleUrls: ['./user.component.scss'] // Styles for the component
})
export class UserComponent {
  users: User[] = []; // Array to hold users
  currentUser: User | null = null; // Current user logged in
  selectedUser: User | null = null; // User selected for editing
  newUser: Partial<User> = {}; // Temporary object for creating new user
  editing: boolean = false; // Flag to indicate if editing mode is active

  constructor(private userService: UserService) {
    // Subscribe to changes in users and current user
    this.userService.users$.subscribe(users => this.users = users);
    this.userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  // Check if current user can create a new user
  canCreateUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanCreateUser) || false;
  }

  // Check if current user can read user information
  canReadUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanReadUser) || false;
  }

  // Check if current user can update user information
  canUpdateUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanUpdateUser) || false;
  }

  // Check if current user can delete a user
  canDeleteUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanDeleteUser) || false;
  }

  // Select a user for editing
  selectUser(user: User) {
    if (this.canUpdateUser()) {
      this.selectedUser = { ...user }; // Create a copy of the user for editing
      this.editing = true; // Set editing mode to true
    }
  }

  // Create a new user
  createUser() {
    if (this.canCreateUser()) {
      // Generate a new unique ID for the user
      const newId = Math.max(...this.users.map(u => u.id)) + 1;
      // Create a new user object
      const user: User = {
        id: newId,
        name: this.newUser.name || '',
        username: this.newUser.username || '',
        email: this.newUser.email || '',
        role: 'Staff',
        permissions: []
      };
      // Add the new user using the user service
      this.userService.addUser(user);
      this.resetForm(); // Reset the form after creating user
    }
  }

  // Update an existing user
  updateUser() {
    if (this.canUpdateUser() && this.selectedUser) {
      this.userService.updateUser(this.selectedUser); // Update user using user service
      this.resetForm(); // Reset the form after updating user
    }
  }

  // Delete a user by user ID
  deleteUser(userId: number) {
    if (this.canDeleteUser()) {
      this.userService.deleteUser(userId); // Delete user using user service
    }
  }

  // Reset the user editing form
  resetForm() {
    this.selectedUser = null; // Clear selected user
    this.newUser = {}; // Clear new user object
    this.editing = false; // Set editing mode to false
  }
}
