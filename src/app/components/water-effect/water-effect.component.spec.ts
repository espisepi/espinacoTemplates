import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterEffectComponent } from './water-effect.component';

describe('WaterEffectComponent', () => {
  let component: WaterEffectComponent;
  let fixture: ComponentFixture<WaterEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
