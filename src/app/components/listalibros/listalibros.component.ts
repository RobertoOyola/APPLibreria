import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriasService } from '../../services/categorias.service';
import { categoriaDTO } from '../../interfaces/categoriaDTO';
import { CategoriasResponse } from '../../interfaces/categoriaResponse';
import { AutoresService } from '../../services/autores.service';
import { AutorDTO } from '../../interfaces/autorDTO';
import { AutorResponse } from '../../interfaces/autorResponse';
import { LibrosServicesService } from '../../services/libros-services.service';
import { filtroLibros } from '../../interfaces/filtroLibros';
import { librosFiltrados } from '../../interfaces/librosFiltrados';
import { LibrosResponse } from '../../interfaces/libroResponse';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listalibros',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.css']
})
export class ListalibrosComponent implements OnInit {
  categorias: categoriaDTO[] = [];
  autores: AutorDTO[] = [];
  libros: librosFiltrados[] = [];
  filtro: filtroLibros = {
    busqueda: '',
    idAutor: 0,
    idCategoria: 0
  };

  constructor(
    private categoriasService: CategoriasService,
    private autoresServices: AutoresService,
    private librosService: LibrosServicesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerAutores();
    this.obtenerLibros();
  }

  obtenerCategorias(): void {
    this.categoriasService.obtenerCategorias().subscribe(
      (response: CategoriasResponse) => { 
        this.categorias = response.data;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  obtenerAutores(): void {
    this.autoresServices.obtenerAutores().subscribe(
      (response: AutorResponse) => { 
        this.autores = response.data;
      },
      (error) => {
        console.error('Error al obtener Autores:', error);
      }
    );
  }

  obtenerLibros(): void {
    this.librosService.obtenerLibros(this.filtro).subscribe(
      (response: LibrosResponse) => { 
        this.libros = response.data;
      },
      (error) => {
        this.toastr.info('No hay libros con esos parametros disponibles', '', {
          tapToDismiss: true,
          progressBar: true,
        }); 
      }
    );
  }

  limpiarFiltros(): void {
    this.filtro = {
      busqueda: '',
      idAutor: 0,
      idCategoria: 0
    };
    this.obtenerLibros();
  }
}

