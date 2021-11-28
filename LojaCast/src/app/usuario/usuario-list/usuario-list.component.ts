import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/classes/usuario';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios!:  Usuario[];

  constructor(private usuarioService:UsuarioService,
              private router:Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios(){
    this.usuarioService.getListaUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }


  usuarioDetails(id: number){
    this.router.navigate(['detalhaUsuario', id]);
  }

  updateUsuario(id: number){
    this.router.navigate(['updateUsuario', id]);
  }

  deleteUsuario(id: number){
    this.usuarioService.deleteUsuario(id).subscribe( data => {
      console.log(data);
      this.getUsuarios();
    })
  }

}
