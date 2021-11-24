import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/api";

  constructor(private httpClient:HttpClient,
              private router:Router) { }

  incluirUser(nome:string, email:string, cpf:number){
    console.log("Requisição feita");

    this.httpClient.get(`${this.baseURL}/usuario/cadastro/${nome}/${email}/${cpf}`).subscribe((data)=>{
      console.log("Dado inserido com sucesso");
      this.router.navigate(['/login']);
    })
  }
}
