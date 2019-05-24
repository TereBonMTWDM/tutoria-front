import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class CurriculaService {
  public url: string;


  constructor(private _http: HttpClient) { 
    this.url = "http://5c8a8e1d0861d300146f7417.mockapi.io/api/v1/alumnos/1/calificaciones";
    
  }

  getCurriculaStatus(): Observable<any> {
    var uri = this.url;
    //console.log("uri: ", uri)
    return this._http.get(uri);
  }
}
