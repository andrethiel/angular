import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Protudos } from './../produtos.model';

@Component({
  selector: 'app-produtos-update',
  templateUrl: './produtos-update.component.html',
  styleUrls: ['./produtos-update.component.css']
})
export class ProdutosUpdateComponent implements OnInit {

  produto: Protudos

  constructor(private produtosService: ProdutosService,
    private router: Router,
    private param: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.param.snapshot.paramMap.get('id')
    this.produtosService.readById(id).subscribe(produto => {
      this.produto = produto;
    });
  }

  updateProdutos(): void {
    this.produtosService.update(this.produto).subscribe(() => {
      this.produtosService.showMessage("Produto alterado");
      this.router.navigate(['/produtos']);
    })
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}


