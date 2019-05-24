import { Component, OnInit, Input } from '@angular/core';
import { IndicadorModel } from '../../models/indicador';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  @Input('indicador') indicador: IndicadorModel;

  prop = true;
  //colorIndicador = "card-header-primary";
  colorIndicador = "";



  constructor() { }

  ngOnInit() {
    this.setColor();

    //console.log(this.indicador);
    


  }

  setColor() {    
    if(this.indicador.color == "green"){
      this.colorIndicador = "alert-success";
    }else if(this.indicador.color == "red") {
      this.colorIndicador = "alert-danger";
    }else if(this.indicador.color == "yellow") {
      this.colorIndicador = "alert-warning";
    }
    else {
      this.colorIndicador = "alert-info";
    }
    
  }

  
  

}
