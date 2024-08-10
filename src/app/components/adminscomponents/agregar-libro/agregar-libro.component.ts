import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { libroCrear } from '../../../interfaces/libroCrear';
import { LibrosServicesService } from '../../../services/libros-services.service';

@Component({
  selector: 'app-agregar-libro',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {
  libro: libroCrear={
    nombre: '',
    aniopublicacion: '',
    nombreAutor: '',
    totalStock: 0,
    descripcionCategoria: '',
  }

  private _libroServices = inject(LibrosServicesService)

  constructor(
    private toastr: ToastrService
  ){}

  OnSubmit(formulario: NgForm){
    
    this.libro.aniopublicacion = this.libro.aniopublicacion.toString();

    this._libroServices.CrearLibro(this.libro).subscribe({
      next: (response) =>{
        this.toastr.success('Libros agregado con exito', 'Agregado');
        this.limpiarFormulario(formulario);
      },
      error: (error) => {
        this.toastr.error('Error al agregar el Libro', 'Error');
      }
    });
  }

  limpiarFormulario(formulario: NgForm) {
    this.libro = {
      nombre: '',
      nombreAutor: '',
      aniopublicacion: '',
      descripcionCategoria: '',
      totalStock: 0,
    };
    formulario.resetForm();
  }
}
