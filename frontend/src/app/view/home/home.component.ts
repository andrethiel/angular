import { Component, OnInit } from '@angular/core';
import { HederService } from '../../components/template/header/heder.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HederService) { 
    headerService.headerData ={
      title: 'Inicio',
      icon: 'home',
      routerUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
