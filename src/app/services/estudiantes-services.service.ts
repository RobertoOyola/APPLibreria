import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { estudianteDTO } from '../interfaces/estudianteDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesServicesService {
  private apiUrl: string = `${Enviroment.endpoint}/Estudiante`

  constructor(private http: HttpClient) { }

  InsertarEstudiante(obj: estudianteDTO): Observable<estudianteDTO> {
    return this.http.post<estudianteDTO>(`${this.apiUrl}/InsertarEstudiante`, obj);
  }
}
