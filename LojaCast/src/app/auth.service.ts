import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authError: any;

  constructor(public fireBaseAuth: AngularFireAuth) {
    //this.user = fireBaseAuth.authState;
  }

  loginWithEmail(email:string, senha:string) {

    let thisService = this;

    thisService.authError = null;

    this.fireBaseAuth.signInWithEmailAndPassword(email, senha)
    .then(
      value => {
        console.log("usuário logado com sucesso")
        window.location.href = "";
      }

    ).catch((error) => {
      console.log(error.menssage);
      thisService.authError = error;
    })
  }

  signUpEmail(email:string, senha:string){
    let thisService = this;

    thisService.authError = null;

    this.fireBaseAuth.createUserWithEmailAndPassword(email,senha)
    .then(
      value=>{
        console.log("usuário cadastrado com sucesso");
        window.location.href = "login";
      }

    ).catch((error)=>{
      console.log(error.menssage);
      thisService.authError = error;
    })
  }

}
