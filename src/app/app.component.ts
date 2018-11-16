import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sistema';  

  constructor(){ }      

  ngOnInit(){
    $("#sucess").hide();
  }

  PartialLogin = true;
  PartialCadastrar = false;
  PartialPesquisar = false;

  falseAll(){
    this.PartialLogin = false;
    this.PartialCadastrar = false;
    this.PartialPesquisar = false;     
  }

  appLogin(){
    this.falseAll();
    this.PartialLogin = true;
  }

  appCadastrar(){
        
    this.falseAll();
    this.PartialCadastrar = true;
  }


  appPesquisar(){
    this.falseAll();
    this.PartialPesquisar = true;     
  }

}
