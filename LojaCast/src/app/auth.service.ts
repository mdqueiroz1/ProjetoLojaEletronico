import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authError: any;
  usuarioLogado: any;
  msg = "usuário logado com sucesso"



  constructor(private fireBaseAuth: AngularFireAuth,
              private snackBar:MatSnackBar,
              private router:Router) {
    //this.user = fireBaseAuth.authState;
  }

  loginWithEmail(email: string, senha: string) {

    let thisService = this;

    thisService.authError = null;

    this.fireBaseAuth.signInWithEmailAndPassword(email, senha)
      .then(
        value => {
          console.log(this.msg);
          this.router.navigate([""]);
          this.snackBar.open("Usuário Logado com sucesso!", "Certo");
        }
      ).catch((error) => {
        console.log(error.menssage);
        thisService.authError = error;
        this.snackBar.open("Erro no usuário/senha", "Certo");
      })
  }

  signUpEmail(email:string, senha: string) {
    let thisService = this;

    thisService.authError = null;

    this.fireBaseAuth.createUserWithEmailAndPassword(email, senha)
      .then(
        value => {
          console.log("usuário cadastrado no firebase com sucesso");
          this.snackBar.open("Usuário cadastrado com sucesso!","Certo")
        }

      ).catch((error) => {
        console.log(error.menssage);
        this.snackBar.open("Erro! Valores incorretos ou já existentes","Certo")
        thisService.authError = error;
      })
  }
}
