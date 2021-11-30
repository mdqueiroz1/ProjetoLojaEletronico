import { Component, OnInit } from '@angular/core';
import { MatSnackBar, matSnackBarAnimations } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  id!: number;

  produto: Produto = new Produto();
  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produtoService.getProdutoById(this.id).subscribe(data => {
      this.produto = data;
    }, error => console.log(error)).unsubscribe;
  }

  onSubmit(){
    this.produtoService.updateProduto(this.id, this.produto).subscribe( data =>{
      this.snackBar.open("Produto atualizado!", "OK", {duration:4000});
      this.goToProdutoList();
    }
    , error => console.log(error)).unsubscribe;
  }

  goToProdutoList(){
    this.router.navigate(['/listaProduto']);
  }

}

