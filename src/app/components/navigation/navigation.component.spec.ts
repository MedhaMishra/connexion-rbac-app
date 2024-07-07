// Import necessary Angular testing modules and components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';

// Describe the test suite for NavigationComponent
describe('NavigationComponent', () => {
  let component: NavigationComponent; // Declare a variable to hold the component instance
  let fixture: ComponentFixture<NavigationComponent>; // Declare a variable to hold the component fixture

  // Asynchronously configure the testing module before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent] // Declare NavigationComponent as a testable component
    })
    .compileComponents(); // Compile the component's template and CSS
  });

  // Initialize the component fixture and component instance before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent); // Create a component fixture
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection
  });

  // Test to check if the NavigationComponent is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is created
  });
});
