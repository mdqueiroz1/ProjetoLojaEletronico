import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../classes/produto';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.css']
})
export class DescricaoProdutoComponent implements OnInit {

  panelOpenState = false;

  produto = new Produto();

  id!:number;

  constructor(private produtoService:ProdutoService,
              private carrinhoService:CarrinhoService,
              private route:ActivatedRoute,
              private router:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.receberProduto();
  }

  receberProduto(){
    this.id = this.route.snapshot.params['id'];

    this.produto = new Produto();

    this.produtoService.getProdutoById(this.id).subscribe(resp => {
      this.produto = resp;
    }).unsubscribe
  }

  comprar(){
    this.carrinhoService.adicionarAoCarrinho(this.id).subscribe( resp =>{
      this.snackBar.open("Produto adicionado ao carrinho!");
      this.router.navigate(['/carrinho']);
    }).unsubscribe
  }

}
