import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

const routes: Routes = [
  {path:"", component:PrincipalComponent, children:[
    {path:"dashboard", component:DashboardComponent},
    {path:"empleados", component:EmpleadosComponent},
    {path:"categorias", component:CategoriasComponent},
    {path:"productos", component:ProductosComponent},
    {path:"proveedores", component:ProveedoresComponent},
    {path:"**", redirectTo:"dashboard"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
