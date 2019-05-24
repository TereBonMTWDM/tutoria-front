import { Component, OnInit, Input } from '@angular/core';
import { CurriculaModel } from '../../models/curricula';
import { AlumnosModel } from '../../models/alumnos';
import { CurriculaService } from '../../services/curricula.service';

@Component({
  selector: 'app-materias-list',
  templateUrl: './materias-list.component.html',
  styleUrls: ['./materias-list.component.scss']
})
export class MateriasListComponent implements OnInit {
  //@Input('dato') dato: CurriculaModel;
  @Input('dato') dato: AlumnosModel;
  //public idAlumno = this.dato.alumnoId;
  public idAlumno: String;
  public curricula: [any];
  //public curricula: any;
  //public curriculaModel: CurriculaModel;
  //public curriculaModel: ;
  colorEstatus = "";


  constructor(public _curriculaService: CurriculaService) { }

  ngOnInit() {

    //console.log("datos personales:", this.dato);
    this.idAlumno = this.dato.alumnoId;
    this.GetEstatusMaterias(this.idAlumno);

    

  }

  GetEstatusMaterias(idAlumno){
    
  
    this._curriculaService.getCurriculaStatus().subscribe(
      result => {

       
        
        this.curricula = result;

        //this.setColor(result.color);

      

        console.log("curricula:; ", this.curricula);

      }, error => {
        console.log(<any>error);
      }
    );
  }


  setColor() {   
    console.log("estoy en setcolor");

/*
    if(this.curricula.color == "green"){
      this.colorEstatus = "alert-success";
    }else if(this.curricula.color == "red") {
      this.colorEstatus = "alert-danger";
    }else if(this.curricula.color == "yellow") {
      this.colorEstatus = "alert-warning";
    }
    else {
      this.colorEstatus = "alert-info";
    }
    */
    
  }
 

/*
  setColor() {   
    console.log("curricula.estatus: ", this.curricula.estatus);
    
    if(this.curricula.estatus == "Ordinario"){
      this.colorEstatus = "alert-success";

    }else {
      this.colorEstatus = "alert-danger";
    }
  }
*/
 

}
