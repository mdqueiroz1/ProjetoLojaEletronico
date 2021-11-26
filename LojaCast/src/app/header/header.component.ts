import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToCadastro(){
    this.router.navigate(['/criarUsuario']);
  }

  goToHome(){
    this.router.navigate(['']);
  }

}




