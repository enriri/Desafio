import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './listaUsuario';
import { Observable } from 'rxjs';
import { Usuario } from './usuario'


@Injectable({
  providedIn: 'root'
})

export class UsuarioService  {        
  
  public usuario = []
  
  constructor(private _http: HttpClient) { }

  usuarioModel = new Usuario('','','',0,'',true); 
  
  getListaUsuarioPesquisa(textoPesquisa: Usuario) {
    
    this._http.get<IUsuario[]>(`https://private-41481-enriri.apiary-mock.com/usuarios`).subscribe(data => this.usuario = data);
        
    return this.usuario.find(x => x.id == textoPesquisa.id);
  }
  
  getListaUsuario(): Observable<IUsuario[]>{

    return this._http.get<IUsuario[]>(`https://private-41481-enriri.apiary-mock.com/usuarios`);
  } 

   setCadastrar(id: string, nome: string, email: string, idade: number, senha: string){
      
    return this._http.post<IUsuario[]>(`https://private-41481-enriri.apiary-mock.com/cadastrar`,{
      id: id,
      nome: nome,
      email: email,
      idade: idade,
      senha: senha,
      ativo: true

    }).subscribe((data:any) => {      
      console.log(data);
    });      
      
   }

}
