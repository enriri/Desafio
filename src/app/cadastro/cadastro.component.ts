import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioModel = new Usuario('','','',0,'',true);
  
  onSubmit(){
    console.log(this.usuarioModel);
    
    this._usuarioService.enroll(this.usuarioModel)
      .subscribe(
        data => console.log('OK !',data),
        error => console.error('Error!', error)
    )
  }
  
  
  constructor(private _usuarioService: UsuarioService ) { }

  ngOnInit() {
  }

}
