import { Component, OnInit, Input } from '@angular/core';
import { CurriculaModel } from '../../models/curricula';

@Component({
  selector: 'app-materia-row',
  templateUrl: './materia-row.component.html',
  styleUrls: ['./materia-row.component.scss']
})
export class MateriaRowComponent implements OnInit {
  @Input('dato') dato: CurriculaModel;
  constructor() { }

  ngOnInit() {

    //console.log("dato", this.dato);
  }

}
