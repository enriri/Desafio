import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


const routes: Routes = [
  { path: 'Cadastro', component: CadastroComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Consulta', component: ConsultaComponent},
  { path: 'Pesquisa', component: PesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CadastroComponent, LoginComponent]