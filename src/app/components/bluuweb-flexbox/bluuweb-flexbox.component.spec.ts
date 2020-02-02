import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluuwebFlexboxComponent } from './bluuweb-flexbox.component';

describe('BluuwebFlexboxComponent', () => {
  let component: BluuwebFlexboxComponent;
  let fixture: ComponentFixture<BluuwebFlexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluuwebFlexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluuwebFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
