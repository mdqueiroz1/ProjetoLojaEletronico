import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos!: Produto[];
  imagem!:any;

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos(){
    this.produtoService.getListaProduto().subscribe(data => {
      this.produtos = data;
    });
  }

  produtoDetails(id: number){
    this.router.navigate(['detalhaProduto', id]);
  }

  updateProduto(id: number){
    this.router.navigate(['updateProduto', id]);
  }

  goBack(){
    this.router.navigate(['/criarProduto']);
  }

  deleteProduto(id: number){
    this.produtoService.deleteProduto(id).subscribe( data => {
      console.log(data);
      this.getProdutos();
    })
  }
}
