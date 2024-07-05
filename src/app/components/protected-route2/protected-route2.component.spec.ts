import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedRoute2Component } from './protected-route2.component';

describe('ProtectedRoute2Component', () => {
  let component: ProtectedRoute2Component;
  let fixture: ComponentFixture<ProtectedRoute2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedRoute2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
