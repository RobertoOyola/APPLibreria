import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
navtolista(){
  this.router.navigate(['/home/libros']);
}

navtoaddestu(){
  this.router.navigate(['/home/estudiante']);
}

navtoinicio(){
  this.router.navigate(['/login']);
}

navtoadmin(){
  this.router.navigate(['/home/admin']);
}
}
