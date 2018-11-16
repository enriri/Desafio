import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {
  
  public usuario = this._usuarioService.getListaUsuario().subscribe(data => this.usuario = data); //Array de objeto
  
  usuarioModel = new Usuario('','','',0,'',true);

  PartialConsultar = false;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() { }


  onSearch(campoPesquisa){    
    let userL = []
     userL = this.usuario.find(x => x.id == campoPesquisa);
    console.log(campoPesquisa);
    
                  
  }

}
