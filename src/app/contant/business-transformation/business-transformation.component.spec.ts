import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTransformationComponent } from './business-transformation.component';

describe('BusinessTransformationComponent', () => {
  let component: BusinessTransformationComponent;
  let fixture: ComponentFixture<BusinessTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessTransformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
