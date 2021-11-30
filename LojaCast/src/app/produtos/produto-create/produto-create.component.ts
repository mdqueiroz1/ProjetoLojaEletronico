import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = new Produto();
  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduto(){
    this.produtoService.createProduto(this.produto).subscribe( data =>{
      console.log(data);
      this.goToProdutoList();
    },
    error => console.log(error)).unsubscribe;
  }

  goToProdutoList(){
    this.router.navigate(['/listaProduto']);
  }

  onSubmit(){
    console.log(this.produto);
    this.saveProduto();
  }

}

