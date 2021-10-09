import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarLandeComponent } from './mandar-lande.component';

describe('MandarLandeComponent', () => {
  let component: MandarLandeComponent;
  let fixture: ComponentFixture<MandarLandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandarLandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandarLandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
