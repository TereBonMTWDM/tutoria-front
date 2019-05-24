import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acordion1Component } from './acordion1.component';

describe('Acordion1Component', () => {
  let component: Acordion1Component;
  let fixture: ComponentFixture<Acordion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acordion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acordion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
