import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  usuarioModel = new Usuario('','','',0,'',true);        
    
  constructor(private _usuarioService: UsuarioService, private router:Router) { }

  ngOnInit() { }

  onSubmit(){    
    
    let CadastroForm = this.usuarioModel; 
    
    let UsuarioService = this._usuarioService;
    
    UsuarioService.setCadastrar(CadastroForm.id,CadastroForm.nome,CadastroForm.email,CadastroForm.idade,CadastroForm.senha);    

    //console.log(CadastroForm);    
    
    //return this.router.navigate(['../Consulta']);
    /*this._usuarioService.enroll(this.usuarioModel)
      .subscribe(
        data => console.log('OK !',data),
        error => console.error('Error!', error)
    )*/

  }

}
