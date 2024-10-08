import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { UsuariosServicesService } from './app/services/usuarios-services.service';
import { HttpClientModule } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibrosServicesService } from './app/services/libros-services.service';
import { CategoriasService } from './app/services/categorias.service';
import { AutoresService } from './app/services/autores.service';
import { PrestamosServicesService } from './app/services/prestamos-services.service';
import { DatePipe } from '@angular/common';
import { EstudiantesServicesService } from './app/services/estudiantes-services.service';


bootstrapApplication(AppComponent, {
  providers: [
    UsuariosServicesService,
    LibrosServicesService,
    CategoriasService,
    AutoresService,
    PrestamosServicesService,
    EstudiantesServicesService,

    importProvidersFrom(
      BrowserModule,
      DatePipe,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      ToastrModule.forRoot({
        preventDuplicates: true,
      }),
      
    ),
  ]
}).catch(err => console.error(err));
