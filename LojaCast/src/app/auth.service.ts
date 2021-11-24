import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authError: any;
  usuarioLogado: any;
  msg = "usuário logado com sucesso"

  constructor(private fireBaseAuth: AngularFireAuth,
              private usuarioService: UsuarioService) {
    //this.user = fireBaseAuth.authState;
  }

  loginWithEmail(email: string, senha: string) {

    let thisService = this;

    thisService.authError = null;

    this.fireBaseAuth.signInWithEmailAndPassword(email, senha)
      .then(
        value => {
          console.log(this.msg);
          window.location.href = "";
        }
      ).catch((error) => {
        console.log(error.menssage);
        thisService.authError = error;
      })
  }

  signUpEmail(email: string, senha: string, nome:string, cpf:number) {
    let thisService = this;

    thisService.authError = null;

    this.fireBaseAuth.createUserWithEmailAndPassword(email, senha)
      .then(
        value => {
          console.log("usuário cadastrado com sucesso");
          this.usuarioService.incluirUser(nome,email,cpf);
        }

      ).catch((error) => {
        console.log(error.menssage);
        thisService.authError = error;
      })
  }

}
