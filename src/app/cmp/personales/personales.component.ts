import { Component, OnInit, Input } from '@angular/core';
import { AlumnosModel } from '../../models/alumnos';

@Component({
  selector: 'app-personales',
  templateUrl: './personales.component.html',
  styleUrls: ['./personales.component.scss']
})

export class PersonalesComponent implements OnInit {
  
  public extranjeroBool: Boolean;
  public lenguaBool: Boolean;

  @Input('dato') dato: AlumnosModel;



  constructor() { }

  ngOnInit() {

    //console.log("dato", this.dato);

    if(this.dato.extranjero != ""){
      this.extranjeroBool = true;
    }
    else{
      this.extranjeroBool = false;
    }

    this.lenguaBool = this.dato.lengua_indigena;

    
  }
}
