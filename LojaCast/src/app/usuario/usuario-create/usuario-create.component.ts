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
      this.authService.signUpEmail(this.usuario.email, this.senha);
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

  nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required]);
  senhaFormControl = new FormControl('', [Validators.required]);
  confirmSenhaFormControl = new FormControl('', [Validators.required]);
  cpfFormControl = new FormControl('', [Validators.required, Validators.maxLength(11)]);
  cepFormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);

}
