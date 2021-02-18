import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.github.com/edsoncarlosdvp';
  cursoAngular: boolean = true;
  urlImage = 'https://image.freepik.com/fotos-gratis/belas-paisagens-do-lago-esmeralda-no-parque-nacional-yoho-columbia-britanica-canada_181624-6877.jpg';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
