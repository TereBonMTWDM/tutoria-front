import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaRowComponent } from './materia-row.component';

describe('MateriaRowComponent', () => {
  let component: MateriaRowComponent;
  let fixture: ComponentFixture<MateriaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
