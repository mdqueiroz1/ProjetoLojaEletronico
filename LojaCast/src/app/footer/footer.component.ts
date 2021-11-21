import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quemSomos(){
    window.location.href = "quemSomos";
  }

  entregaEfrete(){
    window.location.href = "entregaEfrete";
  }

  politicaEtroca(){
    window.location.href = "politicaEtroca";
  }

}
