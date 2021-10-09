import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VineetSinghComponent } from './vineet-singh.component';

describe('VineetSinghComponent', () => {
  let component: VineetSinghComponent;
  let fixture: ComponentFixture<VineetSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VineetSinghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VineetSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
