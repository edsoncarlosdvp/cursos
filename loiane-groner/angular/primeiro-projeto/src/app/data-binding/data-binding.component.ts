import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.github.com/edsoncarlosdvp';
  cursoAngular = true;
  urlImage = 'https://image.freepik.com/fotos-gratis/belas-paisagens-do-lago-esmeralda-no-parque-nacional-yoho-columbia-britanica-canada_181624-6877.jpg';

  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
