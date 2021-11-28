import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  id!:number;
  usuario:Usuario = new Usuario();

  constructor(private usuarioService:UsuarioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuarioId(this.id).subscribe(data => {
      this.usuario = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.usuarioService.updateUsuario(this.id, this.usuario).subscribe( data =>{
      this.goToUsuarioList();
    }
    , error => console.log(error));
  }

  goToUsuarioList(){
    this.router.navigate(['/listaUsuario']);
  }

}
