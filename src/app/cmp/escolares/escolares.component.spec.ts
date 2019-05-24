import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaresComponent } from './escolares.component';

describe('EscolaresComponent', () => {
  let component: EscolaresComponent;
  let fixture: ComponentFixture<EscolaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
