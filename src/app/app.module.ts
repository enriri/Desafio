import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UsuarioService } from './usuario.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    ConsultaComponent,
    CadastroComponent       
    
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
