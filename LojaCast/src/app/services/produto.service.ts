import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Produto } from '../classes/produto';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL = "http://localhost:8080/api/produtos";

  constructor(private httpClient: HttpClient) { }

  getListaProduto(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.baseURL}`);
  }

  createProduto(produto: Produto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, produto);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.baseURL}/${id}`);
  }

  updateProduto(id: number, produto: Produto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, produto);
  }

  deleteProduto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
