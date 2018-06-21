import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [ 
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = "http://localhost:4200";
  cursoAngular: boolean = true;
  urlImagem: string = "https://www.everis.com/sites/all/themes/everis/logo.png";

  valorAtual: string = "";
  valorSalvo;

  isMouseOver: boolean = false;

  nome: string = "abc";

  pessoa: any = {
    nome: "Renan",
    idade: 27
  }

  getValor() {
    return 1;
  }

  getCurtirCusro() {
    return true;
  }

  botaoClicado() {
    alert("Teste do event binding");
  }

  salvarValor(value){
    this.valorSalvo = value;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
