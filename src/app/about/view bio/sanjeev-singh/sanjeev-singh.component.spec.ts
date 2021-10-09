import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjeevSinghComponent } from './sanjeev-singh.component';

describe('SanjeevSinghComponent', () => {
  let component: SanjeevSinghComponent;
  let fixture: ComponentFixture<SanjeevSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanjeevSinghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjeevSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
