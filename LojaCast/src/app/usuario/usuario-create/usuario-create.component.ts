import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../classes/usuario'
import { FormControl, FormBuilder ,Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario:Usuario = new Usuario();
  senha!:string;

  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  saveUsuario(){
    this.usuarioService.createUsuario(this.usuario).subscribe( data =>{
      console.log(data);
      this.authService.signUpEmail(this.usuario, this.senha);
      this.goToLogin();
    },
    error => console.log(error));
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    console.log(this.usuario);
    this.saveUsuario();
  }

  nomeFormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email ]);
  senhaFormControl = new FormControl('', [Validators.required,Validators.minLength(4)]);
  confirmSenhaFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  cpfFormControl = new FormControl('', [Validators.required, Validators.maxLength(11),Validators.minLength(11)]);
  cepFormControl = new FormControl('', [Validators.required, Validators.maxLength(8),Validators.minLength(8), Validators.pattern('[0-9]*')]);

}
