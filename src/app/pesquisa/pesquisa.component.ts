import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {
  
  usuarioModel = new Usuario('','','',0,'',true); 

  public usuario = [];

  public _usuario = this._usuarioService.getListaUsuario().subscribe(data => this._usuario = data);

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() { }


  onSearch(){

    let PesquisaForm = this.usuarioModel;

    this.usuario = this._usuarioService.getListaUsuarioPesquisa(PesquisaForm); // pesquisa o objeto que contem o id do campo procurar no html.

    return console.log(this.usuario);
            
  }

}
