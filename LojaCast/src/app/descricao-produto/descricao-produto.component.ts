import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.css']
})
export class DescricaoProdutoComponent implements OnInit {

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
