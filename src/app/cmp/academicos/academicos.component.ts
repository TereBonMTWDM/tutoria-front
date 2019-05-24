import { Component, OnInit, Input } from '@angular/core';
import { AlumnosModel } from '../../models/alumnos';

@Component({
  selector: 'app-academicos',
  templateUrl: './academicos.component.html',
  styleUrls: ['./academicos.component.scss']
})
export class AcademicosComponent implements OnInit {
  @Input('dato') dato: AlumnosModel;
  public becaBool: Boolean;



  constructor() { }

  ngOnInit() {
    //console.log("dato", this.dato);

    if(this.dato.beca == "ninguno"){
      this.becaBool = false;
    }else {
      this.becaBool = true;
    }
  }

}
