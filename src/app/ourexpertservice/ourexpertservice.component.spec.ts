import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurexpertserviceComponent } from './ourexpertservice.component';

describe('OurexpertserviceComponent', () => {
  let component: OurexpertserviceComponent;
  let fixture: ComponentFixture<OurexpertserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurexpertserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurexpertserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
