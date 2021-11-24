import { Component, OnInit } from '@angular/core';
import { Produto } from '../classes/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  nome!:string;
  descricao!:string;
  preco!:number;
  desconto!:number;

  constructor(public serviceProduto: ProdutoService) { }

  ngOnInit(): void {
  }

  listarProdutos(){
    this.serviceProduto.incluirProduto(this.nome, this.descricao, this.preco, this.desconto);
  }

}
