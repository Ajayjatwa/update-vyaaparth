import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowOrganizationsComponent } from './how-organizations.component';

describe('HowOrganizationsComponent', () => {
  let component: HowOrganizationsComponent;
  let fixture: ComponentFixture<HowOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowOrganizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
