import { Component, OnInit } from '@angular/core';
import { Produto } from '../classes/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private serviceProduto: ProdutoService) { }

  ngOnInit(): void {

  }



}
