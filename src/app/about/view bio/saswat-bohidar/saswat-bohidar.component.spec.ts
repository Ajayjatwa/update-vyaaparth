import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaswatBohidarComponent } from './saswat-bohidar.component';

describe('SaswatBohidarComponent', () => {
  let component: SaswatBohidarComponent;
  let fixture: ComponentFixture<SaswatBohidarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaswatBohidarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaswatBohidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
