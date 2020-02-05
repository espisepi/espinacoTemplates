import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotation3dComponent } from './rotation3d.component';

describe('Rotation3dComponent', () => {
  let component: Rotation3dComponent;
  let fixture: ComponentFixture<Rotation3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rotation3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rotation3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
