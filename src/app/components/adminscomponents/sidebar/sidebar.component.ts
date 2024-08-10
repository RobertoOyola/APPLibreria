import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private router = inject(Router);

  navtoRegistrarPrestamo(){
    this.router.navigate(['/home/admin/devoluciones']);
  }
  navtoCrearLibro(){
    this.router.navigate(['/home/admin/crearLibro']);
  }
  navtoCrearAdmin(){
    this.router.navigate(['/home/admin/crearAdmin']);
  }

}
