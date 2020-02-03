import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurecssComponent } from './purecss.component';

describe('PurecssComponent', () => {
  let component: PurecssComponent;
  let fixture: ComponentFixture<PurecssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurecssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurecssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
