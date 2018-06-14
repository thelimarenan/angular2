import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ["Java", "Javascript", "Typescript", "Angular5"];

  constructor() {
    this.nomePortal = "Renan Site";
  }

  ngOnInit() {
  }

}
