import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildNextGenerationComponent } from './build-next-generation.component';

describe('BuildNextGenerationComponent', () => {
  let component: BuildNextGenerationComponent;
  let fixture: ComponentFixture<BuildNextGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildNextGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildNextGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
