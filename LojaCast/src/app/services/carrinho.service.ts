import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../classes/carrinho';
import { Produto } from '../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private baseURL = 'http://localhost:8080/api/carrinho';

  constructor(private httpClient: HttpClient) { }

  getListaCarrinho(): Observable<Carrinho[]> {
    return this.httpClient.get<Carrinho[]>(`${this.baseURL}`);
  }

  adicionarAoCarrinho(id: number){
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  deleteCarrinho(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
