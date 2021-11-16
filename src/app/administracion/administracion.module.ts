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


@NgModule({
  declarations: [
    PrincipalComponent,
    EmpleadosComponent,
    CategoriasComponent,
    ProductosComponent,
    DashboardComponent,
    ProveedoresComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzDropDownModule,
    NzButtonModule
  ]
})
export class AdministracionModule { }
