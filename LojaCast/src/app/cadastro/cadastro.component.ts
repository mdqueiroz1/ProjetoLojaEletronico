import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  constructor(public authService: AuthService) { }

  usuario = new Usuario();
  senha!:string;


  ngOnInit(): void {  }

  cadastrarLogin(){
    this.authService.signUpEmail(this.usuario, this.senha);
  }

  nomeFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email ]);
  senhaFormControl = new FormControl('', [Validators.required,Validators.minLength(4)]);
  confirmSenhaFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  cpfFormControl = new FormControl('', [Validators.required, Validators.maxLength(11),Validators.minLength(11)]);

}
