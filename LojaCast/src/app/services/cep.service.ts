import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../classes/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  baseURL = "https://viacep.com.br/ws/";

  constructor(private httpClient:HttpClient) { }

  consultaCep(cep:number): Observable<Cep>{
    return this.httpClient.get<Cep>(`${this.baseURL}${cep}/json`);
  }

}
