import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  _url = '';

  constructor(private _http: HttpClient) { }

  getUsuario(){
    return [
      {"id": 1, "nome": "Enrique", "idade": 22},
      {"id": 2, "nome": "Admin", "idade": 99},
    ]
  }
  
  enroll(uer: Usuario){
    return this._http.post<any>(this._url, Usuario);
  }

}
