import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit {

  public usuario = this._usuarioService.getListaUsuario().subscribe(data => this.usuario = data); //Array de objeto
  
  usuarioModel = new Usuario('','','',0,'',true); // Modelo do Usuario
  
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {    
    
  }
  
  pesquisaConsulta(campoPesquisa){        
    
    if(this.usuario.find(x => x.id == campoPesquisa)){
      console.log("ok true");
    }
    
  }
  

}
