import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-detalhelista',
  templateUrl: './detalhelista.component.html',
  styleUrls: ['./detalhelista.component.css']
})
export class DetalhelistaComponent implements OnInit {

  public listaProdutos: Produto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
