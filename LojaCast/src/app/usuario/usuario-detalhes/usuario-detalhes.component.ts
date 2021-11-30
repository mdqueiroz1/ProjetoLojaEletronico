import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {


  id!:number;
  usuario!:Usuario;

  constructor(private route: ActivatedRoute, private usuarioService:UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usuario = new Usuario();
    this.usuarioService.getUsuarioId(this.id).subscribe( data => {
      this.usuario = data;
    }).unsubscribe;
  }

  goBack(){
    this.router.navigate(['/listaUsuario']);
  }

}
