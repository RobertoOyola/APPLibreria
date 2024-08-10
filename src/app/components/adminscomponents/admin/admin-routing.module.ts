import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistrarEntregaComponent } from '../registrar-entrega/registrar-entrega.component';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import { AgregarAdminComponent } from '../agregar-admin/agregar-admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'devoluciones', pathMatch: 'full' },
      { path: 'devoluciones',         component: RegistrarEntregaComponent },
      { path: 'crearLibro',           component: AgregarLibroComponent },
      { path: 'crearAdmin',           component: AgregarAdminComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
