import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaumanGhadiallyComponent } from './nauman-ghadially.component';

describe('NaumanGhadiallyComponent', () => {
  let component: NaumanGhadiallyComponent;
  let fixture: ComponentFixture<NaumanGhadiallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaumanGhadiallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaumanGhadiallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
