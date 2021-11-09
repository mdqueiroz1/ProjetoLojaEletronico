import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

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
        console.log("uauário logado")
      }

    ).catch((error) => {
      console.log(error.menssage);
      thisService.authError = error;
    })
  };

}
