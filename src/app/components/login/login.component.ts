import { Component, inject } from '@angular/core';
import { loginUser } from '../../interfaces/loginuser';
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
  usuario: loginUser = {
    correo: '',
    contrasenia: ''
  }
  private _usuarioService = inject(UsuariosServicesService)
  private router = inject(Router);

  constructor(
    private toastr: ToastrService
  ){}

  onSubmit() {
    const loginUser = {
      correo: this.usuario.correo,
      contrasenia: this.usuario.contrasenia
    };
    this._usuarioService.login(loginUser).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Credenciales Incorrectas');
        this.toastr.error('Credenciales Incorrectas', 'Error')
      }
    });
  }
}
