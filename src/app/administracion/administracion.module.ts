import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PrincipalComponent } from './principal/principal.component';

// NG ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

// NG MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { DataTablesModule } from "angular-datatables";
import { NuevoProductoComponent } from './pages/productos/nuevo-producto/nuevo-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './pages/productos/editar-producto/editar-producto.component';
import { NuevaCategoriaComponent } from './pages/categorias/nueva-categoria/nueva-categoria.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';
import { EditEmpleadoComponent } from './pages/empleados/edit-empleado/edit-empleado.component';
import { ToastrModule } from 'ngx-toastr';
import { EditarCategoriaComponent } from './pages/categorias/editar-categoria/editar-categoria.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
@NgModule({
  declarations: [
    PrincipalComponent,
    EmpleadosComponent,
    CategoriasComponent,
    ProductosComponent,
    DashboardComponent,
    ProveedoresComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    NuevaCategoriaComponent,
    NuevoEmpleadoComponent,
    EditEmpleadoComponent,
    EditarCategoriaComponent,
    ClientesComponent,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzDropDownModule,
    NzButtonModule,
    DataTablesModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ]
})
export class AdministracionModule { }
