import { Component } from '@angular/core';

@Component({
  selector: 'app-protected-route1', // Component selector
  template: '<h1>Protected Route 1</h1>', // Inline template for Protected Route 1 component
  styles: ['h1 { color: blue; }'] // Inline styles for h1 element
})
export class ProtectedRoute1Component {
  // This component is a simple representation of a protected route with a blue heading.
}
