import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { estudianteDTO } from '../../interfaces/estudianteDTO';
import { EstudiantesServicesService } from '../../services/estudiantes-services.service';

@Component({
  selector: 'app-addestudiante',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './addestudiante.component.html',
  styleUrl: './addestudiante.component.css'
})
export class AddestudianteComponent {
  estudiante: estudianteDTO = {
    idEstudiante: 0,
    cedula: '',
    correo: '',
    contrasenia: '',
    nombres: '',
    estado: 'A'
  }

  private _estudianteService = inject(EstudiantesServicesService)

  constructor(
    private toastr: ToastrService
  ){}

  OnSubmit(formulario: NgForm){
    this._estudianteService.InsertarEstudiante(this.estudiante).subscribe({
      next: (response) =>{
        this.toastr.success('Estudiante agregado con exito', 'Agregado');
        this.limpiarFormulario(formulario);
      },
      error: (error) => {
              this.toastr.error('Error al agregar estudiante', 'Error');
            }
    });
  }

  limpiarFormulario(formulario: NgForm) {
    this.estudiante = {
      idEstudiante: 0,
      cedula: '',
      correo: '',
      contrasenia: '',
      nombres: '',
      estado: 'A'
    };
    formulario.resetForm();
  }

}