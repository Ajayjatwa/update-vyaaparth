import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationPerformanceComponent } from './organization-performance.component';

describe('OrganizationPerformanceComponent', () => {
  let component: OrganizationPerformanceComponent;
  let fixture: ComponentFixture<OrganizationPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
