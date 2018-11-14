import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  //usuarioModel: Usuario;
  usuarioModel = new Usuario('','','',0,'',true); 
  
  public _usuario = this._usuarioService.getApi().subscribe(data => this._usuario = data);


  constructor(private _usuarioService: UsuarioService, private router: Router) {   }

  ngOnInit() {  }

  api(){
    
    return this._usuarioService.getApi();
  }

  onSubmit(){    
    
    let LoginForm = this.usuarioModel;        
    
  if( this._usuario.find(x => x.id == LoginForm.id) && this._usuario.find(x => x.senha == LoginForm.senha)){
      this.router.navigate(['../Consulta']);
      
      this._usuarioService.setCadastrar(LoginForm.id,LoginForm.nome,LoginForm.email,LoginForm.idade,LoginForm.senha);
      console.log("OK");

    }else{
      
      return alert('Login ou senha Incorretos');
    }

  }
}
