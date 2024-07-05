import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedRoute1Component } from './protected-route1.component';

describe('ProtectedRoute1Component', () => {
  let component: ProtectedRoute1Component;
  let fixture: ComponentFixture<ProtectedRoute1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedRoute1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedRoute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
