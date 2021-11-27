import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../classes/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private baseURL = 'http://localhost:8080/api/carrinho';

  constructor(private httpClient: HttpClient) { }

  getListaCarrinho(): Observable<Carrinho[]> {
    return this.httpClient.get<Carrinho[]>(`${this.baseURL}`);
  }


}
