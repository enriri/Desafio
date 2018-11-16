import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UsuarioService } from './usuario.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,    
    CadastroComponent,
    PesquisaComponent       
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
        
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
