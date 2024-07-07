// Import necessary Angular testing modules and components
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Describe the test suite for AppComponent
describe('AppComponent', () => {
  // Before each test, configure the testing module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // Import RouterTestingModule for router-related testing
      ],
      declarations: [
        AppComponent // Declare the AppComponent to be tested
      ],
    }).compileComponents(); // Compile the components
  });

  // Test to check if the AppComponent is created successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Create the AppComponent
    const app = fixture.componentInstance; // Get the instance of the AppComponent
    expect(app).toBeTruthy(); // Check if the app instance is created
  });

  // Test to check if the title of the AppComponent is 'rbac-app'
  it(`should have as title 'rbac-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Create the AppComponent
    const app = fixture.componentInstance; // Get the instance of the AppComponent
    expect(app.title).toEqual('rbac-app'); // Check if the title is 'rbac-app'
  });

  // Test to check if the title is rendered correctly in the DOM
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Create the AppComponent
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML element
    expect(compiled.querySelector('.content span')?.textContent).toContain('rbac-app app is running!'); // Check if the title text is rendered correctly
  });
});
