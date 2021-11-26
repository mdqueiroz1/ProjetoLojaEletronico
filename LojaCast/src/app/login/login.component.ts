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

  constructor(private authService: AuthService,
              private router:Router) {  }

  ngOnInit(): void {  }

  clickCadastro() {
    this.router.navigate(['/criarUsuario'])
  }

  fazerLogin() {
    this.authService.loginWithEmail(this.email, this.senha)
  }
}

