import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingOperationsComponent } from './marketing-operations.component';

describe('MarketingOperationsComponent', () => {
  let component: MarketingOperationsComponent;
  let fixture: ComponentFixture<MarketingOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
