import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-accordion',
  templateUrl: './prueba-accordion.component.html',
  styleUrls: ['./prueba-accordion.component.scss']
})
export class PruebaAccordionComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
