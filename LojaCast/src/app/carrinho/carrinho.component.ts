import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../classes/carrinho';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {

  carrinho!:Carrinho[];

  valorProdutos!:number;

  constructor(private carrinhoService:CarrinhoService) { }

  ngOnInit(): void {
    this.getCarrinho();
  }

  private getCarrinho(){
    this.carrinhoService.getListaCarrinho().subscribe(data => {
      this.carrinho = data;
    });
  }

  deleteCarrinho(id: number){
    this.carrinhoService.deleteCarrinho(id).subscribe( data => {
      console.log(data);
      this.getCarrinho();
    })
  }

}
