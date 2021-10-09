import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmritaBansalComponent } from './amrita-bansal.component';

describe('AmritaBansalComponent', () => {
  let component: AmritaBansalComponent;
  let fixture: ComponentFixture<AmritaBansalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmritaBansalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmritaBansalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
