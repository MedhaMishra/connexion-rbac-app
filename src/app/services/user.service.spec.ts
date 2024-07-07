// Import necessary Angular testing modules and the service to be tested
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

// Describe the test suite for UserService
describe('UserService', () => {
  let service: UserService; // Declare a variable to hold the instance of the service

  // Before each test, configure the testing module and inject the UserService
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configure the testing module
    service = TestBed.inject(UserService); // Inject the UserService into the variable
  });

  // Test to check if the UserService is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy(); // Check if the service instance is created
  });
});
