import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { PagamentoComponent } from './pagamento/pagamento.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    CadastroComponent,
    PagamentoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBvWbroFKEazUNgLekqjR29qAl_38P0OAE",
        authDomain: "lojacast-88f71.firebaseapp.com",
        projectId: "lojacast-88f71",
        storageBucket: "lojacast-88f71.appspot.com",
        messagingSenderId: "1025044451661",
        appId: "1:1025044451661:web:f1cb31e610d7c556ad6704"
      }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
