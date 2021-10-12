import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalAdministradorComponent } from './administrador/principal-administrador/principal-administrador.component';
import { AdministradorComponent } from './login/administrador/administrador.component';
import { UsuarioComponent } from './login/usuario/usuario.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"loginAdmin"},
  {path:"loginAdmin", component:AdministradorComponent},
  {path:"loginUsuario", component:UsuarioComponent},
  {path:"principalAdministrador", component:PrincipalAdministradorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
