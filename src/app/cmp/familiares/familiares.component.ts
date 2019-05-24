import { Component, OnInit, Input } from '@angular/core';
import { AlumnosModel } from '../../models/alumnos';

@Component({
  selector: 'app-familiares',
  templateUrl: './familiares.component.html',
  styleUrls: ['./familiares.component.scss']
})
export class FamiliaresComponent implements OnInit {
  @Input('dato') dato: AlumnosModel;

  
  constructor() { }

  ngOnInit() {
    //console.log("dato", this.dato);
  }

}
