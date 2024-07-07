// Import necessary Angular modules and RxJS classes
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Permissions } from '../models/permissions';
import { Roles } from '../models/roles';

// Define the User interface
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  permissions: string[];
}

// Mark this class as injectable and available throughout the application
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users'; // URL to fetch users
  private usersSubject = new BehaviorSubject<User[]>([]); // BehaviorSubject to hold user data
  private currentUserSubject = new BehaviorSubject<User | null>(null); // BehaviorSubject to hold the current user data

  constructor(private http: HttpClient) {
    this.loadInitialData(); // Load initial user data when the service is instantiated
  }

  // Method to load initial user data from the API
  private loadInitialData() {
    this.http.get<User[]>(this.usersUrl).pipe(
      map(users => users.map((user, index) => ({
        ...user,
        role: this.getRole(index), // Assign role based on user index
        permissions: this.getPermissions(index) // Assign permissions based on user index
      })))
    ).subscribe(users => {
      this.usersSubject.next(users); // Update usersSubject with the fetched users
    });
  }

  // Method to get role based on the index
  private getRole(index: number): Roles {
    if (index < 2) {
      return Roles.Admin; // First two users are Admins
    }
    return Roles.Staff; // All other users are Staff
  }

  // Method to get permissions based on the index
  private getPermissions(index: number): Permissions[] {
    if (index < 2) {
      // Admins have all permissions
      return [
        Permissions.CanCreateUser,
        Permissions.CanReadUser,
        Permissions.CanUpdateUser,
        Permissions.CanDeleteUser,
        Permissions.CanViewProtectedRoute1,
        Permissions.CanViewProtectedRoute2
      ];
    } else if (index < 6) {
      // Next 4 users are Staff who can see ProtectedRoute1 and can read, create, update users
      return [
        Permissions.CanReadUser,
        Permissions.CanViewProtectedRoute1
      ];
    } else {
      // Last 4 users are Staff who can see ProtectedRoute2 and can read, create, update users
      return [
        Permissions.CanReadUser,
        Permissions.CanViewProtectedRoute2
      ];
    }
  }

  // Observable to get the list of users
  get users$(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  // Observable to get the current user
  get currentUser$(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  // Method to set the current user
  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  // Method to add a new user
  addUser(user: User) {
    const currentUsers = this.usersSubject.getValue();
    this.usersSubject.next([...currentUsers, user]);
  }

  // Method to update an existing user
  updateUser(user: User) {
    const currentUsers = this.usersSubject.getValue().map(u => u.id === user.id ? user : u);
    this.usersSubject.next(currentUsers);
  }

  // Method to delete a user
  deleteUser(userId: number) {
    const currentUsers = this.usersSubject.getValue().filter(user => user.id !== userId);
    this.usersSubject.next(currentUsers);
  }
}
