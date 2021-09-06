import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfoSerForMarkeOperationsComponent } from './transfo-ser-for-marke-operations.component';

describe('TransfoSerForMarkeOperationsComponent', () => {
  let component: TransfoSerForMarkeOperationsComponent;
  let fixture: ComponentFixture<TransfoSerForMarkeOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfoSerForMarkeOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfoSerForMarkeOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
