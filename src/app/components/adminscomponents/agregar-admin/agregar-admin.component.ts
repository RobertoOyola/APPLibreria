import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { usuarioDTO } from '../../../interfaces/usuarioDTO';
import { UsuariosServicesService } from '../../../services/usuarios-services.service';

@Component({
  selector: 'app-agregar-admin',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './agregar-admin.component.html',
  styleUrl: './agregar-admin.component.css'
})
export class AgregarAdminComponent {

  usuario: usuarioDTO = {
    idUsuario: 0,
    cedula: '',
    correo: '',
    contrasenia: '',
    nombres: '',
    estado: 'A'
  }

  private _usuarioService = inject(UsuariosServicesService)

  constructor(
    private toastr: ToastrService
  ){}

  OnSubmit(formulario: NgForm){
    this._usuarioService.InsertarEstudiante(this.usuario).subscribe({
      next: (response) =>{
        this.toastr.success('Adiminstrador agregado con exito', 'Agregado');
        this.limpiarFormulario(formulario);
      },
      error: (error) => {
              this.toastr.error('Error al agregar admin', 'Error');
            }
    });
  }

  limpiarFormulario(formulario: NgForm) {
    this.usuario = {
      idUsuario: 0,
      cedula: '',
      correo: '',
      contrasenia: '',
      nombres: '',
      estado: 'A'
    };
    formulario.resetForm();
  }
}
