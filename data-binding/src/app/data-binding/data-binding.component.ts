import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://localhost:4200";
  cursoAngular: boolean = true;
  urlImagem: string = "https://www.everis.com/sites/all/themes/everis/logo.png";

  getValor() {
    return 1;
  }

  getCurtirCusro() {
    return true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
