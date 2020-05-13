import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Protudos } from './../produtos.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {

  produto: Protudos

  constructor(
    private produtosService: ProdutosService,
    private parm: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.parm.snapshot.paramMap.get('id');
    this.produtosService.readById(id).subscribe(produto =>{
      this.produto = produto
    });
  }

  deleteProduto(): void{
    this.produtosService.delete(this.produto.id).subscribe(() =>{
      this.produtosService.showMessage("produto deletado");
      this.router.navigate(['/produtos']);
    })
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}
