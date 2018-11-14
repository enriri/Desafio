import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './listaUsuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService  {  
  
  //_url = '/assets/data/list.json';
  _url = '/assets/data/list.json';

  public listUsuario = this._http.get<IUsuario[]>(this._url).subscribe(data => this.listUsuario = data);

  constructor(private _http: HttpClient) { }

  

   getApi(): Observable<IUsuario[]>{

    return this._http.get<IUsuario[]>(`https://private-41481-enriri.apiary-mock.com/usuarios`);     
  } 

   setCadastrar(id: string, nome: string, email: string, idade: number, senha: string){
      

    return this._http.post<IUsuario[]>('https://private-41481-enriri.apiary-mock.com/usuarios',{
      id: id,
      nome: nome,
      email: email,
      idade: idade,
      senha: senha,
      ativo: true


    }).subscribe((data:any) => {
      console.log(data);
    });
    
    //return this.listUsuario.push(a,b,c,d,e,true);
      
   }


/*   enroll(uer: Usuario){
    return this._http.post<any>(this._url, Usuario);
  } */

}
