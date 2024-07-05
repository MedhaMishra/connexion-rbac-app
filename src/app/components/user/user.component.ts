// src/app/components/users/users.component.ts
import { Component } from '@angular/core';
import { Permissions } from 'src/app/models/permissions';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users: User[] = [];
  currentUser: User | null = null;
  selectedUser: User | null = null; // User selected for editing
  newUser: Partial<User> = {}; // Temp object for creating new user
  editing: boolean = false; // Flag to indicate if we are editing

  constructor(private userService: UserService) {
    this.userService.users$.subscribe(users => this.users = users);
    this.userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  canCreateUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanCreateUser) || false;
  }

  canReadUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanReadUser) || false;
  }

  canUpdateUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanUpdateUser) || false;
  }

  canDeleteUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanDeleteUser) || false;
  }

  selectUser(user: User) {
    if (this.canUpdateUser()) {
      this.selectedUser = { ...user }; // Make a copy for editing
      this.editing = true;
    }
  }

  createUser() {
    if (this.canCreateUser()) {
      const newId = Math.max(...this.users.map(u => u.id)) + 1;
      const user: User = {
        id: newId,
        name: this.newUser.name || '',
        username: this.newUser.username || '',
        email: this.newUser.email || '',
        role: 'Staff',
        permissions: []
      };
      this.userService.addUser(user);
      this.resetForm();
    }
  }

  updateUser() {
    if (this.canUpdateUser() && this.selectedUser) {
      this.userService.updateUser(this.selectedUser);
      this.resetForm();
    }
  }

  deleteUser(userId: number) {
    if (this.canDeleteUser()) {
      this.userService.deleteUser(userId);
    }
  }

  resetForm() {
    this.selectedUser = null;
    this.newUser = {};
    this.editing = false;
  }
}

