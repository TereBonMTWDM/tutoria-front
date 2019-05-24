import { Component, OnInit, Input } from '@angular/core';
import { AlumnosModel } from '../../models/alumnos';

@Component({
  selector: 'app-escolares',
  templateUrl: './escolares.component.html',
  styleUrls: ['./escolares.component.scss']
})
export class EscolaresComponent implements OnInit {
  @Input('dato') dato: AlumnosModel;
  constructor() { }

  ngOnInit() {
  }

}
