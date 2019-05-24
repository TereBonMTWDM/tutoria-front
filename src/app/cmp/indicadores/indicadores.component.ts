import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {
  public indicadores: [any];
  public total_indicadores: Number;

  constructor(public _indicadoresSvc: IndicadoresService) { }

  ngOnInit() {
    this.GetIndicadores();
  }

  GetIndicadores(){
    this._indicadoresSvc.getIndicadores().subscribe(
      result => {
        this.indicadores = result;

        console.log("total de indicadores: ", result.length);

        this.total_indicadores = result.length;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
