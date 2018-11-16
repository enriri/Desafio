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

  ngOnInit() { }

  onSubmit(CadastroForm){    
    
    let UsuarioService = this._usuarioService;
    
    console.log(CadastroForm);

    if(CadastroForm.invalid){
      alert("Formulário contém campos invalidos");
    }else{
      UsuarioService.setCadastrar(CadastroForm.id,CadastroForm.nome,CadastroForm.email,CadastroForm.idade,CadastroForm.senha);
      alert("Cadastro realizado");
      this._app.appLogin();
    }  

  }

}
