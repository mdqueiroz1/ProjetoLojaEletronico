import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/api/usuarios";

  constructor(private httpClient:HttpClient) { }

  getListaUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  criarUsuario(usuario: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

  getUsuarioId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
