import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DescricaoProdutoComponent } from './descricao-produto/descricao-produto.component';
import { DescricaoProduto2Component } from './descricao-produto2/descricao-produto2.component';
import { DescricaoProduto3Component } from './descricao-produto3/descricao-produto3.component';
import { DescricaoProduto4Component } from './descricao-produto4/descricao-produto4.component';
import { DescricaoProduto5Component } from './descricao-produto5/descricao-produto5.component';
import { DescricaoProduto6Component } from './descricao-produto6/descricao-produto6.component';
import { DescricaoProduto7Component } from './descricao-produto7/descricao-produto7.component';
import { DescricaoProduto8Component } from './descricao-produto8/descricao-produto8.component';
import { DescricaoProduto9Component } from './descricao-produto9/descricao-produto9.component';
import { EntregaEfreteComponent } from './entrega-efrete/entrega-efrete.component';
import { FooterComponent } from './footer/footer.component';
import { GridProdutosComponent } from './grid-produtos/grid-produtos.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { Page404Component } from './page404/page404.component';
import { PoliticaEtrocaComponent } from './politica-etroca/politica-etroca.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { UsuarioDeleteComponent } from './usuario/usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioUpdateComponent } from './usuario/usuario-update/usuario-update.component';
import { UsuarioDetalhesComponent } from './usuario/usuario-detalhes/usuario-detalhes.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { ProdutoDeleteComponent } from './produtos/produto-delete/produto-delete.component';
import { ProdutoCreateComponent } from './produtos/produto-create/produto-create.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoUpdateComponent } from './produtos/produto-update/produto-update.component';
import { ProdutoDetailComponent } from './produtos/produto-detail/produto-detail.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


const configFirebase = {
  apiKey: "AIzaSyBvWbroFKEazUNgLekqjR29qAl_38P0OAE",
  authDomain: "lojacast-88f71.firebaseapp.com",
  projectId: "lojacast-88f71",
  storageBucket: "lojacast-88f71.appspot.com",
  messagingSenderId: "1025044451661",
  appId: "1:1025044451661:web:f1cb31e610d7c556ad6704"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    CadastroComponent,
    PagamentoComponent,
    HeaderComponent,
    FooterComponent,
    QuemSomosComponent,
    EntregaEfreteComponent,
    PoliticaEtrocaComponent,
    GridProdutosComponent,
    DescricaoProdutoComponent,
    DescricaoProduto2Component,
    DescricaoProduto3Component,
    DescricaoProduto4Component,
    DescricaoProduto5Component,
    DescricaoProduto6Component,
    DescricaoProduto7Component,
    DescricaoProduto8Component,
    DescricaoProduto9Component,
    ProdutosComponent,
    UsuarioComponent,
    UsuarioDeleteComponent,
    UsuarioListComponent,
    UsuarioUpdateComponent,
    UsuarioDetalhesComponent,
    UsuarioCreateComponent,
    ProdutoDeleteComponent,
    ProdutoCreateComponent,
    ProdutoListComponent,
    ProdutoUpdateComponent,
    ProdutoDetailComponent,
    CarrinhoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(configFirebase),
    NoopAnimationsModule,
    MatToolbarModule,
    AngularMaterialModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
