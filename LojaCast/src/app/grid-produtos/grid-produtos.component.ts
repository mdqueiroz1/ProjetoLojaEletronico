import { Component, OnInit } from '@angular/core';
import { Produto } from '../classes/produto';
import { ProdutoListComponent } from '../produtos/produto-list/produto-list.component';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-grid-produtos',
  templateUrl: './grid-produtos.component.html',
  styleUrls: ['./grid-produtos.component.css']
})
export class GridProdutosComponent implements OnInit {

  produtos!: Produto[];

  constructor(private produtoService:ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(){
    this.produtoService.getListaProduto().subscribe(data => {
      this.produtos = data;
    });
  }
}

