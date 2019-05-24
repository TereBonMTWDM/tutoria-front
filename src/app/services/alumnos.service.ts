import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AlumnosService {
  public url: string;





  constructor(private _http: HttpClient) { 

    this.url = "http://5c8a8e1d0861d300146f7417.mockapi.io/api/v1/alumnos/1/";


  }

  getDatosPersonales(): Observable<any> {
    var uri = this.url + "datos_personales";
        //console.log("uri: ", uri)
        return this._http.get(uri);
  }

  getDatosDomicilio(): Observable<any> {
    var uri = this.url + "domicilio";
        return this._http.get(uri);
  }

  getDatosSeguro(): Observable<any> {
    var uri = this.url + "seguridad_social";
        return this._http.get(uri);
  }

  getDatosAcademicos(): Observable<any> {
    var uri = this.url + "academico";        
        return this._http.get(uri);
  }

  getDatosFamiliares(): Observable<any> {
    var uri = this.url + "familiares";        
        return this._http.get(uri);
  }

  getDatosEscolares(): Observable<any> {
    var uri = this.url + "escolares";        
        return this._http.get(uri);
  }



}
