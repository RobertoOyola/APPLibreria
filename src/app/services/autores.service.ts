import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorResponse } from '../interfaces/autorResponse';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private apiUrl: string = `${Enviroment.endpoint}/Autor`;

  constructor(private http: HttpClient) { }

  obtenerAutores(): Observable<AutorResponse> {
    return this.http.get<AutorResponse>(`${this.apiUrl}/ObtenerAutores`);
  }
}
