import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { EntregaEfreteComponent } from './entrega-efrete/entrega-efrete.component';
import { PoliticaEtrocaComponent } from './politica-etroca/politica-etroca.component';
import { DescricaoProdutoComponent } from './descricao-produto/descricao-produto.component';
import { GridProdutosComponent } from './grid-produtos/grid-produtos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'pagamento', component:PagamentoComponent},
  {path: 'quemSomos', component:QuemSomosComponent},
  {path: 'entregaEfrete', component:EntregaEfreteComponent},
  {path: 'politicaEtroca', component:PoliticaEtrocaComponent},
  {path: 'descricaoProduto', component:DescricaoProdutoComponent},
  {path: 'produtos', component:GridProdutosComponent}, /* TODO retirar rota de produtos */
  {path: '**',component:Page404Component},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
