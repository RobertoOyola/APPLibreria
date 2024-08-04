import { Component, inject } from '@angular/core';
import { loginUsuario } from '../../interfaces/loginUsuario';
import { UsuariosServicesService } from '../../services/usuarios-services.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ToastrModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: loginUsuario = {
    correo: '',
    contrasenia: ''
  }
  private _usuarioService = inject(UsuariosServicesService)
  private router = inject(Router);

  constructor(
    private toastr: ToastrService
  ){}

  onSubmit() {
    const loginUsuario = {
      correo: this.usuario.correo,
      contrasenia: this.usuario.contrasenia
    };
    this._usuarioService.login(loginUsuario).subscribe({
      next: (response) => {
        this.router.navigate(['/home/libros']);
      },
      error: (err) => {
        this.toastr.error('Credenciales Incorrectas', 'Error')
      }
    });
  }
}
