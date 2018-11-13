import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './listaUsuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService  {  
  
  _url = '/assets/data/list.json';

  public listUsuario = this._http.get<IUsuario[]>(this._url).subscribe(data => this.listUsuario = data);

  constructor(private _http: HttpClient) { }

  

   getApi(): Observable<IUsuario[]>{

    return this._http.get<IUsuario[]>(this._url); 
  }

   setCadastrar(a: string, b: string, c: string, d: number, e: string){
      
      return this.listUsuario.push(a,b,c,d,e,true);
      
   }


/*   enroll(uer: Usuario){
    return this._http.post<any>(this._url, Usuario);
  } */

}
