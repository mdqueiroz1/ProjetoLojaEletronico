import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  id!: number;
  produto!: Produto;
  imagem!:any;
  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produto = new Produto();
    this.produtoService.getProdutoById(this.id).subscribe(data => {
      this.produto = data;
      this.imagem = `../../../assets/produto-${this.produto.idImagem}.jpg`
    });
  }
}
