import { Component, EventEmitter, Output, inject } from '@angular/core';
import { loginUsuario } from '../../../interfaces/loginUsuario';
import { UsuariosServicesService } from '../../../services/usuarios-services.service';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-dialoglogin',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './dialoglogin.component.html',
  styleUrls: ['./dialoglogin.component.css']
})
export class DialogloginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  
  usuario: loginUsuario = {
    correo: '',
    contrasenia: ''
  }
  private _usuarioService = inject(UsuariosServicesService);
  private router = inject(Router);

  private modalInstance: bootstrap.Modal | undefined;

  constructor(
    private toastr: ToastrService
  ){}

  openModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.modalInstance = new bootstrap.Modal(modalElement as HTMLElement);
      this.modalInstance.show();
    }
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
    this.resetForm();
  }

  resetForm() {
    this.usuario = {
      correo: '',
      contrasenia: ''
    };
  }

  onSubmit() {
    const loginUsuario = {
      correo: this.usuario.correo,
      contrasenia: this.usuario.contrasenia
    };
    this._usuarioService.login(loginUsuario).subscribe({
      next: (response) => {
        this.loginSuccess.emit();
        this.closeModal();
        this.router.navigate(['/home/admin']);
      },
      error: (err) => {
        this.toastr.error('Credenciales Incorrectas', 'Error');
      }
    });
  }
}
