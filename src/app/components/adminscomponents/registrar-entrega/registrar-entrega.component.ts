import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrestamosServicesService } from '../../../services/prestamos-services.service';
import { prestamosVista } from '../../../interfaces/prestamosVista';
import { prestamosResponse } from '../../../interfaces/prestamoResponse';
import { ToastrService } from 'ngx-toastr';
import { ModalPrestamoComponent } from '../modal-prestamo/modal-prestamo.component';

@Component({
  selector: 'app-registrar-entrega',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalPrestamoComponent,
  ],
  templateUrl: './registrar-entrega.component.html',
  styleUrl: './registrar-entrega.component.css'
})
export class RegistrarEntregaComponent implements OnInit {
  @ViewChild(ModalPrestamoComponent) dialogRecibir!: ModalPrestamoComponent;
  
  busquedas: string = '';
  prestamos: prestamosVista[] = [];

  constructor(
    private prestamoServices: PrestamosServicesService,
    private toastr: ToastrService,
  ){}
  ngOnInit(): void {
    this.obtenerPrestamos();
  }

  obtenerPrestamos(): void {
    this.prestamoServices.obtenerPrestamos(this.busquedas).subscribe(
      (response: prestamosResponse) => { 
        this.prestamos = response.data;
      },
      (error) => {
        this.toastr.info('No hay prestamos a ese Nombre', '', {
          tapToDismiss: true,
          progressBar: true,
        }); 
      }
    );
  }

  abrirModalEntrega(idPrestamo: number): void {
    if (this.dialogRecibir) {
      this.dialogRecibir.openModal(idPrestamo);
    } else {
      console.error('El componente ModalPrestamoComponent no está disponible.');
    }
  }
  
}
