import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipManagementComponent } from './leadership-management.component';

describe('LeadershipManagementComponent', () => {
  let component: LeadershipManagementComponent;
  let fixture: ComponentFixture<LeadershipManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
