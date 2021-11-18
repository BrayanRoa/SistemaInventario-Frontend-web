import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { NuevoProductoComponent } from './pages/productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/productos/editar-producto/editar-producto.component';
import { NuevaCategoriaComponent } from './pages/categorias/nueva-categoria/nueva-categoria.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';

const routes: Routes = [
  {path:"", component:PrincipalComponent, children:[
    {path:"dashboard", component:DashboardComponent},
    {path:"empleados", component:EmpleadosComponent},
      {path:"nuevoEmpleado", component:NuevoEmpleadoComponent},
    {path:"categorias", component:CategoriasComponent},
      {path:"nuevaCategoria", component:NuevaCategoriaComponent},
    {path:"productos", component:ProductosComponent},
      {path:"nuevoProducto", component:NuevoProductoComponent},
      {path:"edit/:id", component:EditarProductoComponent},
    {path:"proveedores", component:ProveedoresComponent},
    {path:"**", redirectTo:"dashboard"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
