import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      
  usuarioModel = new Usuario('','','',0,'',true); 
  
  public _usuario = this._usuarioService.getListaUsuario().subscribe(data => this._usuario = data);

  constructor(private _usuarioService: UsuarioService, private router: Router, private _appComponent: AppComponent) {   }

  ngOnInit() { 
   }

  onSubmit(){            
    let LoginForm = this.usuarioModel;        
    
  if( this._usuario.find(x => x.id == LoginForm.id) && this._usuario.find(x => x.senha == LoginForm.senha)){
    
    this._appComponent.appPesquisar();
      
      console.log("OK");

    }else{
      
      return alert('Login ou senha Incorretos');
    }

  }
}
