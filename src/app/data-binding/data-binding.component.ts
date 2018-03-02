import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  url= 'http://google.com';
  cursoAngular: boolean = true; // pode tipar ou não

  valorAtual = '';
  valorSalvo = '';
  
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClick(){
    alert('Botão cliclado!')
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>evento.target).value;
  }
  salvarValor (valor){
    this.valorSalvo=valor;
  }
  onMouseOverOut(){
    this.isMouseOver =!this.isMouseOver;
  }


  valorInicial: number = 15;

  onMudouValor(evento){
    console.log(evento.novoValor);

  }

  constructor() { }

  ngOnInit() {
  }

}
