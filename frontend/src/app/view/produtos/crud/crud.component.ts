import { HederService } from './../../../components/template/header/heder.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HederService) {

    headerService.headerData ={
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routerUrl: '/produtos'
    }
  }

  ngOnInit(): void {
  }
  navigateToProdutosCreate(): void{
    this.router.navigate(['/produtos/create'])
  }
}
