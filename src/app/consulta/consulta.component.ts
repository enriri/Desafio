import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public usuario = [];

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioService.getUsuario();
  }

}
