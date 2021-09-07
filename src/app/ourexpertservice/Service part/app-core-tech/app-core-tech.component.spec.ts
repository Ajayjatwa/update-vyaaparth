import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreTechComponent } from './app-core-tech.component';

describe('AppCoreTechComponent', () => {
  let component: AppCoreTechComponent;
  let fixture: ComponentFixture<AppCoreTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCoreTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoreTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
