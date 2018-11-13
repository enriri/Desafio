import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  usuarioModel = new Usuario('','','',0,'',true);
  


  constructor(private _usuarioService: UsuarioService, private router: Router, private usuario: UsuarioService) {   }

  ngOnInit() {

  }

  onSubmit(){    
    
    let LoginForm = this.usuarioModel;
    
    let usuarioService = this._usuarioService.getUsuario();
    
    
if( usuarioService.find(x => x.id == LoginForm.id) && usuarioService.find(x => x.senha == LoginForm.senha)){
    this.router.navigate(['../Consulta']);
    
    console.log("OK");

  }else{
      console.log((this._usuarioService.getUsuario()));
      return alert('Erro');
    }

  }
}
