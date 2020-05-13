import { Protudos } from './../produtos.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {

  produto: Protudos={
    name: '',
    price: null,
  }

  constructor(private produtosService: ProdutosService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  createProdutos(): void{
    this.produtosService.create(this.produto).subscribe(() => {
      this.produtosService.showMessage('Executado com sucesso');
      this.router.navigate(['/produtos'])
    })
    
  }

  cancel(): void{
    //console.log('adskodsakosadk')
    this.router.navigate(['/produtos'])
  }
}
