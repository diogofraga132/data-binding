import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-personalizadas',
  templateUrl: './diretivas-personalizadas.component.html',
  styleUrls: ['./diretivas-personalizadas.component.css']
})
export class DiretivasPersonalizadasComponent implements OnInit {

   mostrarCursos:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onMostrarCursos(){
    this.mostrarCursos=!this.mostrarCursos;
  }

}
