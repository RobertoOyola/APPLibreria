import { Injectable } from '@angular/core';
import { Enviroment } from '../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginUser } from '../interfaces/loginuser';
import { usuarioDTO } from '../interfaces/usuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {
  private apiUrl: string = `${Enviroment.endpoint}/Usuarios`;

  constructor(private http: HttpClient) { }

  login(data: loginUser):Observable<usuarioDTO>{
    return this.http.post<usuarioDTO>(`${this.apiUrl}/Login`, data);
  }

}