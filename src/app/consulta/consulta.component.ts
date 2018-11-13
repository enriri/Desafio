import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public usuario = [];

  constructor(private _usuarioService: UsuarioService, private _httpClientModule: HttpClientModule) { }

  ngOnInit() {
    this._usuarioService.getApi().subscribe(data => this.usuario = data);
    
  }
  
}
