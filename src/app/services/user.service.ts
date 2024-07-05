import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Permissions } from '../models/permissions';
import { Roles } from '../models/roles';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private usersSubject = new BehaviorSubject<User[]>([]);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.http.get<User[]>(this.usersUrl).pipe(
      map(users => users.map((user, index) => ({
        ...user,
        role: this.getRole(index),
        permissions: this.getPermissions(index)
      })))
    ).subscribe(users => {
      this.usersSubject.next(users);
    });
  }

  private getRole(index: number): Roles {
    if (index < 2) {
      return Roles.Admin;
    }
    return Roles.Staff;
  }

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
        Permissions.CanCreateUser,
        Permissions.CanUpdateUser,
        Permissions.CanViewProtectedRoute1
      ];
    } else {
      // Last 4 users are Staff who can see ProtectedRoute2 and can read, create, update users
      return [
        Permissions.CanReadUser,
        Permissions.CanCreateUser,
        Permissions.CanUpdateUser,
        Permissions.CanViewProtectedRoute2
      ];
    }
  }

  get users$(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  get currentUser$(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  addUser(user: User) {
    const currentUsers = this.usersSubject.getValue();
    this.usersSubject.next([...currentUsers, user]);
  }

  updateUser(user: User) {
    const currentUsers = this.usersSubject.getValue().map(u => u.id === user.id ? user : u);
    this.usersSubject.next(currentUsers);
  }

  deleteUser(userId: number) {
    const currentUsers = this.usersSubject.getValue().filter(user => user.id !== userId);
    this.usersSubject.next(currentUsers);
  }
}
