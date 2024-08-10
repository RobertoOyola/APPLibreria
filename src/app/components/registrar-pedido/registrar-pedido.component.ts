import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Modal } from 'bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { prestamoCrear } from '../../interfaces/prestamoCrear';
import { PrestamosServicesService } from '../../services/prestamos-services.service';

@Component({
  selector: 'app-registrar-pedido',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './registrar-pedido.component.html',
  styleUrl: './registrar-pedido.component.css'
})
export class RegistrarPedidoComponent {
  private modalInstance: Modal | undefined;

  prestamo: prestamoCrear = {
    idLibro: 0,
    fechaEstimadaDevolucion: new Date(),
    correo: '',
    contrasenia: '',
  }

  private _prestamoService = inject(PrestamosServicesService)

  constructor(
    private toastr: ToastrService
  ){}
  
  OnSubmit(formulario: NgForm){
  this._prestamoService.CrearPrestamo(this.prestamo).subscribe({
    next: (response) =>{
      this.toastr.success('Prestamo realizado exito', 'Agregado');
      this.closeModal();
      this.limpiarFormulario(formulario);
    },  
    error: (error) => {
      this.toastr.error('Error al realizar el prestamo', 'Error');
    }
  });
}

  openModal(idLibro: number){
    this.prestamo.idLibro = idLibro
    const modalElement = document.getElementById('myModalPedido');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement as HTMLElement);
      this.modalInstance.show();
    }
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  limpiarFormulario(formulario: NgForm) {
    this.prestamo = {
        idLibro: 0,
        fechaEstimadaDevolucion: new Date(),
        correo: '',
        contrasenia: '',
    };
    formulario.resetForm();
  }
}
