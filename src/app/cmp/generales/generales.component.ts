import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
//import { CurriculaService } from '../../services/curricula.service';

import { AlumnosModel } from '../../models/alumnos';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.scss']
})
export class GeneralesComponent implements OnInit {
  /*checked = true;
  disabled = false;*/
  public personales: [any];
  public domicilio: [any];
  public seguro: [any];
  public academicos: [any];
  public familiares: [any];
  public escolares: [any];
  public curricula: [any];
  //public dato: Array<AlumnosModel>;
  

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







  
  constructor(
    public _alumnosSvc: AlumnosService
    //public _curriculaService: CurriculaService
    ) { }

  ngOnInit() {

    this.GetDatosPersonales();

    this.GetDatosAcademicos();

    this.GetDatosFamiliares();

    this.GetDatosEscolares();

    //this.GetEstatusMaterias();

  }

  GetDatosPersonales(){
    
    this._alumnosSvc.getDatosPersonales().subscribe(
      result => {
      //console.log("personales: ", result);

      this.personales = result;

      this._alumnosSvc.getDatosDomicilio().subscribe(
        resultDom =>{
          this.personales.map(function(dom){
            //console.log("domicilio: ", resultDom);
            dom.domicilio = resultDom[0];            
          });
        }
      )


      this._alumnosSvc.getDatosSeguro().subscribe(
        resultSeguro =>{
          this.personales.map(function(seg){
            seg.seguro = resultSeguro[0];            
          });
          //console.log("los tres:", this.personales);
        }
      )
    },
      error => {
        console.log(<any>error);
    });
  }

  GetDatosAcademicos(){
    
    this._alumnosSvc.getDatosAcademicos().subscribe(
      result => {
      //console.log("academicos: ", result);

      this.academicos = result;

    },
      error => {
        console.log(<any>error);
    });
  }

  
  GetDatosFamiliares(){
    
    this._alumnosSvc.getDatosFamiliares().subscribe(
      result => {
      //console.log("familiares: ", result);

      this.familiares = result;

    },
      error => {
        console.log(<any>error);
    });
  }


  GetDatosEscolares(){
    
    this._alumnosSvc.getDatosEscolares().subscribe(
      result => {
      //console.log("escolares: ", result);

      this.escolares = result;

    },
      error => {
        console.log(<any>error);
    });
  }

  //seguimiento académico
  //indicadores




/*
  //materias estatus
  GetEstatusMaterias(){
    
  
    this._curriculaService.getCurriculaStatus().subscribe(
      result => {
        this.curricula = result;

        console.log("curricula:; ", this.curricula);

      }, error => {
        console.log(<any>error);
      }
    );
  }*/
}
