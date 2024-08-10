import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PrestamosServicesService } from '../../../services/prestamos-services.service';

@Component({
  selector: 'app-modal-prestamo',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './modal-prestamo.component.html',
  styleUrls: ['./modal-prestamo.component.css']
})
export class ModalPrestamoComponent {
  private modalInstance: Modal | undefined;

  idPrestamo: number = 0;

  private _prestamoService = inject(PrestamosServicesService);

  constructor(
    private toastr: ToastrService
  ) {}

  openModal(idPrestamo: number) {
    this.idPrestamo = idPrestamo;
    const modalElement = document.getElementById('myModalRecepcion');
    if (modalElement) {
      try {
        this.modalInstance = new Modal(modalElement as HTMLElement);
        this.modalInstance.show();
      } catch (error) {
        console.error('Error initializing modal:', error);
      }
    } else {
      console.error('Modal element not found');
    }
  }
  
  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  OnSubmit() {
    this._prestamoService.AceptarPrestamo(this.idPrestamo).subscribe({
      next: (response) => {
        this.toastr.success('Préstamo realizado con éxito', 'Agregado');
        this.closeModal();
        window.location.reload();
      },
      error: (error) => {
        this.toastr.error('Error al realizar el préstamo', 'Error');
      }
    });
  }
}
