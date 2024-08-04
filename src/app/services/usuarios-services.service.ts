import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginUsuario } from '../interfaces/loginUsuario';
import { usuarioDTO } from '../interfaces/usuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {
  private apiUrl: string = `${Enviroment.endpoint}/Usuario`;

  constructor(private http: HttpClient) { }

  login(data: loginUsuario):Observable<usuarioDTO>{
    return this.http.post<usuarioDTO>(`${this.apiUrl}/Login`, data);
    
  }

}