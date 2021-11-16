import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  constructor(public authService: AuthService) { }

  email :any;
  senha :any;

  ngOnInit(): void {  }

  cadastrarLogin(){
    this.authService.signUpEmail(this.email, this.senha);
  }

}
