import { ProdutosService } from './../produtos.service';
import { Protudos } from './../produtos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.css']
})
export class ProdutosReadComponent implements OnInit {

  produtos: Protudos[]
  displayedColumns = ['id','name', 'price', 'action']

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.read().subscribe(produtos => {
      this.produtos = produtos
    });
  }

}
