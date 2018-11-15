import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit {

  public usuario = [];

  constructor(private _usuarioService: UsuarioService, private _app: AppComponent) { }

  ngOnInit() {
            
   
   this._usuarioService.getListaUsuario().subscribe(data => this.usuario = data);
        
  }
  
}
