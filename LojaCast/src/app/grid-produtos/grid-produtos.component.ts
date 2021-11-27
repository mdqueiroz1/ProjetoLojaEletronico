import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../classes/produto';
import { ProdutoListComponent } from '../produtos/produto-list/produto-list.component';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-grid-produtos',
  templateUrl: './grid-produtos.component.html',
  styleUrls: ['./grid-produtos.component.css']
})
export class GridProdutosComponent implements OnInit {

  produtos!: Produto[];

  constructor(private produtoService:ProdutoService,
              private carrinhoService:CarrinhoService,
              private router:Router) { }


  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(){
    this.produtoService.getListaProduto().subscribe(data => {
      this.produtos = data;
    });
  }

  adicionarCarrinho(id :number){
    this.carrinhoService.adicionarAoCarrinho(id).subscribe(res =>{
      console.log(res);
    })
  }

  comprarProduto(id:number){
  }

}

