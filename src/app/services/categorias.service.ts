import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasResponse } from '../interfaces/categoriaResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiUrl: string = `${Enviroment.endpoint}/Categoria`;
  
  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<CategoriasResponse> {
    return this.http.get<CategoriasResponse>(`${this.apiUrl}/ObtenerCategorias`);
  }
}
