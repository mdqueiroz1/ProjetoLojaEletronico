import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { AuthService } from './auth.service';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { EntregaEfreteComponent } from './entrega-efrete/entrega-efrete.component';
import { PoliticaEtrocaComponent } from './politica-etroca/politica-etroca.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';

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
