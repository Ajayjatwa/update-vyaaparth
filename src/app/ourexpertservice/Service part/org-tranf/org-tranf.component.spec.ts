import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTranfComponent } from './org-tranf.component';

describe('OrgTranfComponent', () => {
  let component: OrgTranfComponent;
  let fixture: ComponentFixture<OrgTranfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTranfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTranfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
