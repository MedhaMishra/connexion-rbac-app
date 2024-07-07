// Import necessary Angular modules and components for routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProtectedRoute1Component } from './components/protected-route1/protected-route1.component';
import { ProtectedRoute2Component } from './components/protected-route2/protected-route2.component';

// Define the routes for the application
const routes: Routes = [
  { path: 'users', component: UserComponent }, // Route for UserComponent
  { path: 'protected-route1', component: ProtectedRoute1Component }, // Route for ProtectedRoute1Component
  { path: 'protected-route2', component: ProtectedRoute2Component }, // Route for ProtectedRoute2Component
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route that redirects to /users
];

// Define the AppRoutingModule
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import RouterModule and configure it with the routes
  exports: [RouterModule] // Export RouterModule so it can be used in other parts of the application
})
export class AppRoutingModule { }
