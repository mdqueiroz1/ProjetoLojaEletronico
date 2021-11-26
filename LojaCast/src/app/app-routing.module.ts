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
import { DescricaoProduto2Component } from './descricao-produto2/descricao-produto2.component';
import { DescricaoProduto3Component } from './descricao-produto3/descricao-produto3.component';
import { DescricaoProduto4Component } from './descricao-produto4/descricao-produto4.component';
import { DescricaoProduto5Component } from './descricao-produto5/descricao-produto5.component';
import { DescricaoProduto6Component } from './descricao-produto6/descricao-produto6.component';
import { DescricaoProduto7Component } from './descricao-produto7/descricao-produto7.component';
import { DescricaoProduto8Component } from './descricao-produto8/descricao-produto8.component';
import { DescricaoProduto9Component } from './descricao-produto9/descricao-produto9.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioDeleteComponent } from './usuario/usuario-delete/usuario-delete.component';
import { UsuarioDetalhesComponent } from './usuario/usuario-detalhes/usuario-detalhes.component';
import { UsuarioUpdateComponent } from './usuario/usuario-update/usuario-update.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pagamento', component:PagamentoComponent},
  {path: 'quemSomos', component:QuemSomosComponent},
  {path: 'entregaEfrete', component:EntregaEfreteComponent},
  {path: 'politicaEtroca', component:PoliticaEtrocaComponent},
  {path: 'descricaoProduto', component:DescricaoProdutoComponent},
  {path: 'descricaoProduto2', component:DescricaoProduto2Component},
  {path: 'descricaoProduto3', component:DescricaoProduto3Component},
  {path: 'descricaoProduto4', component:DescricaoProduto4Component},
  {path: 'descricaoProduto5', component:DescricaoProduto5Component},
  {path: 'descricaoProduto6', component:DescricaoProduto6Component},
  {path: 'descricaoProduto7', component:DescricaoProduto7Component},
  {path: 'descricaoProduto8', component:DescricaoProduto8Component},
  {path: 'descricaoProduto9', component:DescricaoProduto9Component},
  {path: 'criarUsuario', component:UsuarioCreateComponent},
  {path: 'listaUsuario', component:UsuarioListComponent},
  {path: 'deletaUsuario', component:UsuarioDeleteComponent},
  {path: 'updateUsuario/:id', component:UsuarioUpdateComponent},
  {path: 'detalhaUsuario/:id', component:UsuarioDetalhesComponent},
  {path: 'produtos', component:ProdutosComponent}, /* TODO retirar rota de produtos */
  {path: '**',component:Page404Component},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
