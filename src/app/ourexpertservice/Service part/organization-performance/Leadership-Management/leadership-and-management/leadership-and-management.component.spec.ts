import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipAndManagementComponent } from './leadership-and-management.component';

describe('LeadershipAndManagementComponent', () => {
  let component: LeadershipAndManagementComponent;
  let fixture: ComponentFixture<LeadershipAndManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipAndManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipAndManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
