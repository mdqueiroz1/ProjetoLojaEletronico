import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page401Component } from './page404/page404.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page401Component,
    CadastroComponent,

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
      apiKey: "AIzaSyAkmeD1yjjjqpV1LOEnPrHYvtNsbrRv_qA",
      authDomain: "projetoconversor-64ea6.firebaseapp.com",
      projectId: "projetoconversor-64ea6",
      storageBucket: "projetoconversor-64ea6.appspot.com",
      messagingSenderId: "424121813776",
      appId: "1:424121813776:web:01b1ba8fd3a848a7ddb395"
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
