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
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioDeleteComponent } from './usuario/usuario-delete/usuario-delete.component';
import { UsuarioDetalhesComponent } from './usuario/usuario-detalhes/usuario-detalhes.component';
import { UsuarioUpdateComponent } from './usuario/usuario-update/usuario-update.component';
import { ProdutoCreateComponent } from './produtos/produto-create/produto-create.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoDeleteComponent } from './produtos/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './produtos/produto-update/produto-update.component';
import { ProdutoDetailComponent } from './produtos/produto-detail/produto-detail.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pagamento', component:PagamentoComponent},
  {path: 'quemSomos', component:QuemSomosComponent},
  {path: 'entregaEfrete', component:EntregaEfreteComponent},
  {path: 'politicaEtroca', component:PoliticaEtrocaComponent},
  {path: 'descricaoProduto/:id', component:DescricaoProdutoComponent},
  {path: 'criarUsuario', component:UsuarioCreateComponent},
  {path: 'listaUsuario', component:UsuarioListComponent},
  {path: 'deletaUsuario', component:UsuarioDeleteComponent},
  {path: 'updateUsuario/:id', component:UsuarioUpdateComponent},
  {path: 'detalhaUsuario/:id', component:UsuarioDetalhesComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'produtos', component:ProdutosComponent}, /* TODO retirar rota de produtos */
  {path: 'criarProduto', component:ProdutoCreateComponent},
  {path: 'listaProduto', component: ProdutoListComponent},
  {path: 'deleteProduto', component:ProdutoDeleteComponent},
  {path: 'updateProduto/:id', component:ProdutoUpdateComponent},
  {path: 'detalhaProduto/:id', component:ProdutoDetailComponent},
  {path: '**',component:Page404Component},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
