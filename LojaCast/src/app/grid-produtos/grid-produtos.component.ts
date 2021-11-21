import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-produtos',
  templateUrl: './grid-produtos.component.html',
  styleUrls: ['./grid-produtos.component.css']
})
export class GridProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  descricaoProduto(){
    window.location.href = "descricaoProduto";
  }

}

