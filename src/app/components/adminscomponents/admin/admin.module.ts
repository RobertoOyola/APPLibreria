import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import { AgregarAdminComponent } from '../agregar-admin/agregar-admin.component';
import { ModalPrestamoComponent } from '../modal-prestamo/modal-prestamo.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarComponent,
    AdminComponent,
    AgregarLibroComponent,
    AgregarAdminComponent,
    ModalPrestamoComponent,
    DatePipe
  ]
})
export class AdminModule { }
