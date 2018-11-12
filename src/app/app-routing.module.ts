import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConsultaComponent } from './consulta/consulta.component';


const routes: Routes = [
  { path: 'Cadastro', component: CadastroComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Home', component: NavbarComponent},
  { path: 'Consulta', component: ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CadastroComponent, LoginComponent, NavbarComponent]