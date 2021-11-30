import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
              private router:Router,
              private snackBar:MatSnackBar) {  }

  ngOnInit(): void {  }

  clickCadastro() {
    this.router.navigate(['/criarUsuario'])
  }

  fazerLogin() {
    if(this.email == 'adm@adm.com' && this.senha == 'admin123'){
      this.router.navigate(['/listaProduto']);
      this.snackBar.open("Logado como adm", "Ok", {duration:2000});
    }else{
      this.authService.loginWithEmail(this.email, this.senha);
    }
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  senhaFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
}
