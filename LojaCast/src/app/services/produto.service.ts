import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient ) { }

  incluirProduto(nome:string, descricao:string, preco:number, desconto:number){
    console.log("Requisição feita...");

    this.httpClient.get(`${this.baseURL}/produto/nome/${nome}/descricao/${descricao}/preco/${preco}/desconto/${desconto}`).subscribe((data)=>{
      console.log("Requisição efetuada com sucesso");
    });
  }
}
