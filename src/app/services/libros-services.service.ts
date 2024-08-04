import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { filtroLibros } from '../interfaces/filtroLibros';
import { librosFiltrados } from '../interfaces/librosFiltrados';
import { Observable } from 'rxjs';
import { LibrosResponse } from '../interfaces/libroResponse';

@Injectable({
  providedIn: 'root'
})
export class LibrosServicesService {
  private apiUrl: string = `${Enviroment.endpoint}/Libro`;

  constructor(private http: HttpClient) { }

  obtenerLibros(data: filtroLibros): Observable<LibrosResponse> {
    return this.http.post<LibrosResponse>(`${this.apiUrl}/ObtenerLibros`, data);
  }
}
