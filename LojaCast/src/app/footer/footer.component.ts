import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  quemSomos(){
    this.router.navigate(['/quemSomos']);
  }

  entregaEfrete(){
    this.router.navigate(['/entregaEfrete']);
  }

  politicaEtroca(){
    this.router.navigate(['/politicaEtroca']);
  }

}
