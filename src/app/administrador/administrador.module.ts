import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { PrincipalAdministradorComponent } from './principal-administrador/principal-administrador.component';
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [
    SidebarComponent,
    MainPagesComponent,
    PrincipalAdministradorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    // NzLayoutModule
  ]
})
export class AdministradorModule { }
