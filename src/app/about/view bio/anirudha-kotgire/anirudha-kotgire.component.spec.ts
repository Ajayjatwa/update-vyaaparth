import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnirudhaKotgireComponent } from './anirudha-kotgire.component';

describe('AnirudhaKotgireComponent', () => {
  let component: AnirudhaKotgireComponent;
  let fixture: ComponentFixture<AnirudhaKotgireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnirudhaKotgireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnirudhaKotgireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
