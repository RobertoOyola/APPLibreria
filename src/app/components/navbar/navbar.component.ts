import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogloginComponent } from '../adminscomponents/dialoglogin/dialoglogin.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    DialogloginComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);

  @ViewChild(DialogloginComponent) dialogLogin!: DialogloginComponent;
navtolista(){
  this.router.navigate(['/home/libros']);
}

navtoaddestu(){
  this.router.navigate(['/home/estudiante']);
}

navtoinicio(){
  this.router.navigate(['/login']);
}

navtoadmin() {
  this.dialogLogin.openModal();
  this.dialogLogin.loginSuccess.subscribe(() => {
    this.router.navigate(['/home/admin']);
  });
}

}

