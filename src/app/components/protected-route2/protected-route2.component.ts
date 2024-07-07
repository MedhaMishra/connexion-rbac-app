import { Component } from '@angular/core';

@Component({
  selector: 'app-protected-route2', // Component selector
  template: '<h1>Protected Route 2</h1>', // Inline template for Protected Route 2 component
  styles: ['h1 { color: green; }'] // Inline styles for h1 element
})
export class ProtectedRoute2Component {
  // This component represents a protected route with a green heading.
}
