import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { prestamosResponse } from '../interfaces/prestamoResponse';
import { prestamoCrear } from '../interfaces/prestamoCrear';

@Injectable({
  providedIn: 'root'
})
export class PrestamosServicesService {
  private apiUrl: string = `${Enviroment.endpoint}/Prestamo`;

  constructor(private http: HttpClient) { }

  obtenerPrestamos(busqueda: string): Observable<prestamosResponse> {
    return this.http.get<prestamosResponse>(`${this.apiUrl}/ObtenerPrestamos`, {
      params: { busqueda }
    });
  }

  CrearPrestamo(prestamo: prestamoCrear): Observable<prestamoCrear> {
    return this.http.post<prestamoCrear>(`${this.apiUrl}/InsertarPrestamos`, prestamo);
  }

  AceptarPrestamo(idPrestamo: number): Observable<number> {
    return this.http.put<number>(`${this.apiUrl}/ConfirmarPrestamos`, idPrestamo);
  }
}
