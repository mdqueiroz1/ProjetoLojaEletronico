import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


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
      }

    ).catch((error)=>{
      console.log(error.menssage);
      thisService.authError = error;
    })
  }

}
