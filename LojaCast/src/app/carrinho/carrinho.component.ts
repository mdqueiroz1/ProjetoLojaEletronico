import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from '../classes/carrinho';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})


export class CarrinhoComponent implements OnInit {

  carrinho!:Carrinho[];
  produtos!:any[];
  totalProdutos!:any[];


  constructor(private carrinhoService:CarrinhoService,
              private router:Router) { }

  ngOnInit(): void {
    this.getCarrinho();
  }

  private getCarrinho(){
    this.carrinhoService.getListaCarrinho().subscribe(data => {
      this.carrinho = data;

      this.produtos = this.carrinho.map(function(carrinho){
        return carrinho.precoProduto;
      })

      this.totalProdutos = this.produtos.reduce(function(total, produtos){
        return total+ produtos
      })

      console.log(this.totalProdutos);
      localStorage.setItem('totalItens', this.totalProdutos.toString());
    }).unsubscribe;
  }

  deleteCarrinho(id: number){
    this.carrinhoService.deleteCarrinho(id).subscribe( data => {
      console.log(data);
      this.getCarrinho();
    }).unsubscribe;
  }

  goToHome(){
    this.router.navigate(['']);
  }

  goToPagamento(){
    this.router.navigate(['/pagamento']);
  }
}
