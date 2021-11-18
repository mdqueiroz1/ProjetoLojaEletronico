import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public senha: any;

  constructor(public authService: AuthService) {  }

  ngOnInit(): void {  }

  clickCadastro() {
    window.location.href = "cadastro";
  }

  clickCadastroGoogle(){

  }

  fazerLogin() {
    this.authService.loginWithEmail(this.email, this.senha)
  }



}

