import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-descricao-produto2',
  templateUrl: './descricao-produto2.component.html',
  styleUrls: ['./descricao-produto2.component.css']
})
export class DescricaoProduto2Component implements OnInit {

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }
}
