import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAccordionComponent } from './prueba-accordion.component';

describe('PruebaAccordionComponent', () => {
  let component: PruebaAccordionComponent;
  let fixture: ComponentFixture<PruebaAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
