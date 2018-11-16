import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  usuarioModel = new Usuario('','','',0,'',true);        
    
  constructor(private _usuarioService: UsuarioService, private _app: AppComponent) { }

  ngOnInit() {
    $("#Invalido").hide();
  }
   

  onSubmit(CadastroForm, CadastroSenha){    
    
    let UsuarioService = this._usuarioService;            

    if(CadastroForm.invalid || CadastroSenha < 5){
      $("#Invalido").show();
    }else{
      UsuarioService.setCadastrar(CadastroForm.id,CadastroForm.nome,CadastroForm.email,CadastroForm.idade,CadastroForm.senha);      
      $("#sucess").show();
      this._app.appLogin();
    }  

  }

}
