import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {
  
  usuarioModel = new Usuario('','','',0,'',true); 

  PartialConsultar = false;

  constructor() { }

  ngOnInit() { }


  onSearch(){    
    
    this.PartialConsultar = false;
    this.PartialConsultar = !this.PartialConsultar;            
  }

}
