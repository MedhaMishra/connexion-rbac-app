// Import the Component decorator from Angular core
import { Component } from '@angular/core';

// Define the component using the @Component decorator
@Component({
  selector: 'app-root', // The component's CSS element selector
  templateUrl: './app.component.html', // The location of the component's template file
  styleUrls: ['./app.component.scss'] // The location of the component's private CSS styles
})

// Define the AppComponent class
export class AppComponent {
  title = 'rbac-app'; // Define a property 'title' with a default value
}
