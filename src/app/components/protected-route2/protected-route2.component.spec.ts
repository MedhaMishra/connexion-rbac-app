// Import necessary Angular testing modules and components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectedRoute2Component } from './protected-route2.component'; // Import the component to be tested

// Describe the test suite for ProtectedRoute2Component
describe('ProtectedRoute2Component', () => {
  let component: ProtectedRoute2Component; // Declare a variable to hold the component instance
  let fixture: ComponentFixture<ProtectedRoute2Component>; // Declare a variable to hold the component fixture

  // Asynchronously configure the testing module before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtectedRoute2Component] // Declare ProtectedRoute2Component as a testable component
    })
    .compileComponents(); // Compile the component's template and CSS
  });

  // Initialize the component fixture and component instance before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedRoute2Component); // Create a component fixture
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection
  });

  // Test to check if the ProtectedRoute2Component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is created
  });
});
