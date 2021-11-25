import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Produto } from '../classes/produto';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }



}
