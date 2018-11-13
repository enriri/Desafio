import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService  {
  
  _url = '';

  constructor(private _http: HttpClient) {


  }

  
   
  listUsuarios = [
    
    {id: "1", nome: "Enrique", email: "abc", idade: 22, senha: "123", ativo: true},
    {id: "admin", nome: "Admin", email: "abc", idade: 99, senha: "admin", ativo: true}
    
   ];

   setCadastrar(a: string, b: string, c: string, d: number, e: string){
      return this.listUsuarios.push({id: a ,nome: b, email: c , idade: d, senha: e ,ativo:true});
      //return this.listUsuarios.push({id: a ,nome: b, email: c , idade: d, senha: e ,ativo:true});
   }

   getUsuario(){
         
    return this.listUsuarios;
   }


  getUsuarioID(){
    return 
  }

  enroll(uer: Usuario){
    return this._http.post<any>(this._url, Usuario);
  }

}
