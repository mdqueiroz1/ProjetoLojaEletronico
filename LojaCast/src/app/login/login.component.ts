import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroupName, FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public senha: any;

  public mostrarCadastro = false;


  constructor(public authService: AuthService) {  }

  ngOnInit(): void {  }

  liberarCasdastro() {
    this.mostrarCadastro = !this.mostrarCadastro
  }


  fazerLogin() {
    this.authService.loginWithEmail(this.email, this.senha)
  }
}

