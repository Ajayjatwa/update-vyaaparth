import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KunalChoudhuryComponent } from './kunal-choudhury.component';

describe('KunalChoudhuryComponent', () => {
  let component: KunalChoudhuryComponent;
  let fixture: ComponentFixture<KunalChoudhuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KunalChoudhuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KunalChoudhuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
