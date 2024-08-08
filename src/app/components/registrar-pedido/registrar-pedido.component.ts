import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-registrar-pedido',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, ],
  templateUrl: './registrar-pedido.component.html',
  styleUrl: './registrar-pedido.component.css'
})
export class RegistrarPedidoComponent {
  private modalInstance: Modal | undefined;

  openModal() {
    const modalElement = document.getElementById('myModal');
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
}
